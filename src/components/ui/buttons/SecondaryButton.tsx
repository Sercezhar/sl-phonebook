interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
}

function SecondaryButton({ text, onClick }: SecondaryButtonProps) {
  return (
    <button
      className="rounded border border-sky-400 bg-white px-6 py-2 text-sky-400 outline-none transition-colors hover:bg-sky-50 focus:ring-4 focus:ring-sky-200"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
