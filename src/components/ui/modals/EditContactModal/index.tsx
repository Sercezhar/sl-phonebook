import { ContactAttributes } from '@/types/contact';
import Modal from '../Modal';
import EditContactForm from './EditContactForm';

type EditContactModalProps = {
  isModalOpen: boolean;
  contact: ContactAttributes | null;
  onClose: () => void;
  closeModal: () => void;
  closeActions: () => void;
};

function EditContactModal({
  isModalOpen,
  contact,
  onClose,
  closeModal,
  closeActions,
}: EditContactModalProps) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      isButtons={false}
      title="Edit contact"
      onClose={onClose}
      onConfirm={() => {}}
    >
      <EditContactForm
        contact={contact}
        onClose={onClose}
        closeModal={closeModal}
        closeActions={closeActions}
      />
    </Modal>
  );
}

export default EditContactModal;
