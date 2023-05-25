import { ButtonType } from '@/types';

interface ButtonProps {
  type?: ButtonType;
  text: string;
  onClick?: () => void;
}

function Button({ type = 'button', text, onClick }: ButtonProps) {
  return (
    <button
      className="flex lg:mx-auto px-6 py-2 w-fit bg-sky-400 font-medium text-white border border-sky-400 rounded transition-opacity outline-none hover:opacity-80 focus:ring-4 focus:ring-sky-200"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
