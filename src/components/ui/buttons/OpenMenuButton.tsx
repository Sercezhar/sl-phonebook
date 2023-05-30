import { HiMenu } from 'react-icons/hi';
import { MenuButtonProps } from '../../../types/buttons';

function OpenMenuButton({ setIsMenuOpen }: MenuButtonProps) {
  return (
    <button
      className="space-y-1.5 rounded"
      type="button"
      onClick={setIsMenuOpen}
    >
      <HiMenu size={40} color="#fff" />
    </button>
  );
}

export default OpenMenuButton;
