type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  text: string;
}

function Button({ type = 'button', text }: ButtonProps) {
  return (
    <button
      className="flex mx-auto px-6 py-2 w-fit bg-sky-400 font-medium text-white rounded transition-opacity hover:opacity-80 outline-none focus:ring-4 focus:ring-sky-200"
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
