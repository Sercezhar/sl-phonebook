import { ButtonType } from '@/types/buttons';

interface PrimaryButtonProps {
  type?: ButtonType;
  text: string;
  onClick?: () => void;
}

function PrimaryButton({ type = 'button', text, onClick }: PrimaryButtonProps) {
  return (
    <button
      className="mx-auto flex w-fit rounded border border-sky-400 bg-sky-400 px-6 py-2 font-medium text-white outline-none transition-opacity hover:opacity-80 focus:ring-4 focus:ring-sky-200"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
