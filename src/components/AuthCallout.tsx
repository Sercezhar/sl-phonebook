import { Link } from 'react-router-dom';

interface AuthCalloutProps {
  message: string;
  linkText: string;
  navigateTo: string;
}

function AuthCallout({ message, linkText, navigateTo }: AuthCalloutProps) {
  return (
    <p className="p-4 font-medium text-gray-900 text-sm text-center border border-sky-400 rounded">
      {message}{' '}
      <Link to={navigateTo} className="font-semibold text-sky-400">
        {linkText}
      </Link>
    </p>
  );
}

export default AuthCallout;
