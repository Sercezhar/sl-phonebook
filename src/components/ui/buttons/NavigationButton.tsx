import { Link } from 'react-router-dom';

interface NavigationButtonProps {
  to?: string;
  text: string;
}

function NavigationButton({ to = 'contacts', text }: NavigationButtonProps) {
  return (
    <Link
      to={to}
      className="flex w-fit rounded border border-sky-400 bg-sky-400 px-6 py-2 font-medium text-white outline-none transition-opacity hover:opacity-80 focus:ring-4 focus:ring-sky-200"
    >
      {text}
    </Link>
  );
}

export default NavigationButton;
