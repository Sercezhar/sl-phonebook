import ContactsForm from '@/pages/Contacts/ContactsForm';
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
      <ContactsForm onClose={onClose} />
    </Modal>
  );
}

export default CreateContactModal;