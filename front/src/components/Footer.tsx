import { FaDocker } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/dashboard"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <FaDocker className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              leftoversv2
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Inicio
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:underline me-4 md:me-6">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/aboutus" className="hover:underline me-4 md:me-6">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="/" className="hover:underline">
            leftoversv2
          </a>
        </span>
      </div>
    </footer>
  );
}
