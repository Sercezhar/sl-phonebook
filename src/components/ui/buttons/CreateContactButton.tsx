import { HiPlus } from 'react-icons/hi';

interface CreateContactButtonProps {
  openModal: () => void;
}

function CreateContactButton({ openModal }: CreateContactButtonProps) {
  return (
    <button
      className="fixed bottom-16 right-14 p-2 bg-sky-400 rounded-full lg:hidden"
      type="button"
      onClick={openModal}
    >
      <HiPlus size={40} color="#fff" />
    </button>
  );
}

export default CreateContactButton;
