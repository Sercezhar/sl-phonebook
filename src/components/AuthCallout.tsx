import { Link } from 'react-router-dom';

interface AuthCalloutProps {
  message: string;
  linkText: string;
  navigateTo: string;
}

function AuthCallout({ message, linkText, navigateTo }: AuthCalloutProps) {
  return (
    <p className="rounded border border-sky-400 p-4 text-center text-sm font-medium text-gray-900">
      {message}{' '}
      <Link to={navigateTo} className="font-semibold text-sky-400">
        {linkText}
      </Link>
    </p>
  );
}

export default AuthCallout;
