import useClickOutside from '@/hooks/useClickOutside';
import { ReactNode } from 'react';
import Button from '../buttons/Button';
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
  const ref = useClickOutside(onClose);

  return isModalOpen ? (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-black/[.3] z-50">
      <div
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
              <Button text={onConfirmText} onClick={onConfirm} />
            </li>
          </ul>
        )}
      </div>
    </div>
  ) : null;
}

export default Modal;
