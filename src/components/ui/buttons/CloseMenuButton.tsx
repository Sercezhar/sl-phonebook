import { HiX } from 'react-icons/hi';
import { MenuButtonProps } from '../../../types/buttons';

function CloseMenuButton({ setIsMenuOpen }: MenuButtonProps) {
  return (
    <button
      className="group absolute top-2 right-4 rounded"
      type="button"
      onClick={setIsMenuOpen}
    >
      <HiX
        size={40}
        className="fill-gray-500 transition-colors group-hover:fill-sky-400"
      />
    </button>
  );
}

export default CloseMenuButton;
