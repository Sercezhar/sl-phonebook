import CreateContactForm from '@/components/CreateContactForm';
import Modal from './Modal';

type ModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

function CreateContactModal({ isModalOpen, onClose }: ModalProps) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      isButtons={false}
      title="Create a contact"
      onClose={onClose}
      onConfirm={() => {}}
    >
      <CreateContactForm onClose={onClose} />
    </Modal>
  );
}

export default CreateContactModal;
