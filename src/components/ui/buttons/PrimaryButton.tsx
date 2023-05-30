import { ButtonType } from '../../../types/buttons';

interface PrimaryButtonProps {
  type?: ButtonType;
  text: string;
  onClick?: () => void;
}

function PrimaryButton({ type = 'button', text, onClick }: PrimaryButtonProps) {
  return (
    <button
      className="flex mx-auto px-6 py-2 w-fit bg-sky-400 font-medium text-white border border-sky-400 rounded transition-opacity outline-none hover:opacity-80 focus:ring-4 focus:ring-sky-200"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
