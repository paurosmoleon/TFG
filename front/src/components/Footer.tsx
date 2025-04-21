import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/home"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/whale-no-background.png" alt="logo" className="w-36" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              eFCT
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Landing
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:underline me-4 md:me-6">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline me-4 md:me-6">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline me-4 md:me-6">
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <Link to="/home" className="hover:underline">
            eFCT
          </Link>
        </span>
      </div>
    </footer>
  );
}
