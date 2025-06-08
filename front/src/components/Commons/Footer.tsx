import { Link } from 'react-router-dom';
import LogoSVG from '../../assets/icons/LogoSVG';
export default function Footer() {
  return (
    <footer className="bg-white border-t border-b border-gray-200 filter drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/home"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <LogoSVG className="w-36" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900">
              eFCT
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-900 sm:mb-0">
            <li>
              <Link
                to="/"
                className="me-4 md:me-6 text-slate-900 hover:text-blue-700"
              >
                Landing
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="me-4 md:me-6 text-slate-900 hover:text-blue-700"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="me-4 md:me-6 text-slate-900 hover:text-blue-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="me-4 md:me-6 text-slate-900 hover:text-blue-700"
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-slate-900 sm:text-center">
          © 2025{' '}
          <Link to="/home" className="text-blue-700 hover:text-blue-800">
            eFCT
          </Link>
        </span>
      </div>
    </footer>
  );
}
