interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
}

function SecondaryButton({ text, onClick }: SecondaryButtonProps) {
  return (
    <button
      className="px-6 py-2 bg-white text-sky-400 border border-sky-400 rounded transition-colors outline-none hover:bg-sky-50 focus:ring-4 focus:ring-sky-200"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
