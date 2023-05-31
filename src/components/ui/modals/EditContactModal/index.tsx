import { ContactAttributes } from '@/types/contact';
import Modal from '../Modal';
import EditContactForm from './EditContactForm';

type ModalProps = {
  isModalOpen: boolean;
  contact: ContactAttributes | null;
  onClose: () => void;
};

function EditContactModal({ isModalOpen, contact, onClose }: ModalProps) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      isButtons={false}
      title="Edit contact"
      onClose={onClose}
      onConfirm={() => {}}
    >
      <EditContactForm contact={contact} onClose={onClose} />
    </Modal>
  );
}

export default EditContactModal;
