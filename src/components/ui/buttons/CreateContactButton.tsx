import { HiPlus } from 'react-icons/hi';

interface CreateContactButton {
  openModal: () => void;
}

function CreateContactButton({ openModal }: CreateContactButton) {
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
