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
          className="fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center bg-black/[.3]"
        >
          <animated.div
            style={contentTransition}
            ref={ref}
            className="flex w-[288px] flex-col gap-6 rounded bg-white p-6 font-medium shadow-xl sm:w-[400px]"
          >
            <h2 className="text-xl font-semibold">{title}</h2>

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
              <ul className="flex justify-end gap-4">
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
