import { useClickOutside } from '@/hooks/useClickOutside';
import { useKeyPress } from '@/hooks/useKeyPress';
import { animated, useSpring, useTransition } from '@react-spring/web';
import { ReactNode } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

type ModalProps = {
  isModalOpen: boolean;
  isButtons?: boolean;
  title?: string;
  onConfirmText?: string;
  onClose: () => void;
  onConfirm: () => void;
  children?: ReactNode;
};

function Modal({
  isModalOpen,
  isButtons = true,
  title = 'Delete contact?',
  onConfirmText = 'Delete',
  onClose,
  onConfirm,
  children,
}: ModalProps) {
  useKeyPress('Escape', () => onClose());

  const ref = useClickOutside(onClose);

  const modalTransition = useTransition(isModalOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 150,
    },
  });

  const contentTransition = useSpring({
    scale: isModalOpen ? 1 : 0.6,
    config: {
      duration: 150,
    },
  });

  return modalTransition(
    (styles, isModalOpen) =>
      isModalOpen && (
        <animated.div
          style={styles}
          className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-black/[.3] z-50"
        >
          <animated.div
            style={contentTransition}
            ref={ref}
            className="flex flex-col gap-6 p-6 w-[288px] sm:w-[400px] font-medium bg-white rounded shadow-xl"
          >
            <h2 className="font-semibold text-xl">{title}</h2>

            <div>
              {children ? (
                children
              ) : (
                <p className="text-gray-500">
                  The contact will be removed from the list permanently
                </p>
              )}
            </div>

            {isButtons && (
              <ul className="flex gap-4 justify-end">
                <li>
                  <SecondaryButton text="Cancel" onClick={onClose} />
                </li>

                <li>
                  <PrimaryButton text={onConfirmText} onClick={onConfirm} />
                </li>
              </ul>
            )}
          </animated.div>
        </animated.div>
      )
  );
}

export default Modal;
