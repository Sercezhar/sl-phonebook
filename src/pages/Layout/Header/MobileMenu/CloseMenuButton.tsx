import { MenuButtonProps } from '@/types/buttons';
import { HiX } from 'react-icons/hi';

function CloseMenuButton({ setIsMenuOpen }: MenuButtonProps) {
  return (
    <button
      className="group absolute right-4 top-2 rounded"
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
