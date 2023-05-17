import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-medium text-gray-600">
      <h2 className="text-9xl">404</h2>
      <p className="mb-6 text-2xl uppercase">Page not found</p>

      <Link
        to="/"
        className="px-6 py-2 bg-sky-400 font-medium text-white rounded transition-opacity hover:opacity-80"
      >
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;
