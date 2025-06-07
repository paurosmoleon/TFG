import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfesorSVG from '../../assets/icons/ProfesorSVG';
import AlumnSVG from '../../assets/icons/AlumnSVG';
import TutorSVG from '../../assets/icons/TutorSVG';
import LogOutSVG from '../../assets/icons/LogOutSVG';

interface User {
  name: string;
  account_type: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [accountType, setAccountType] = useState<string | null>(null);

  const navItems = [
    { name: 'Inicio', to: '/home' },
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Sobre nosotros', to: '/about-us' },
  ];

  const extendedNavItems =
    accountType === 'practices_tutor'
      ? [...navItems, { name: 'Becarios', to: '/becarios' }]
      : accountType === 'teacher_class'
      ? [...navItems, { name: 'Clases', to: '/clases' }]
        : navItems;

  const isActive = (to: string) =>
    pathname === to || pathname.startsWith(`${to}/`);

  useEffect(() => {
    const currentUser = async () => {
      try {
        const res = await axios.get<User[]>(
          'https://tfg-production-f839.up.railway.app/users/me',
          {
            headers: {
              Authorization: localStorage.getItem('tokenUser') || '',
            },
          }
        );
        setAccountType(res.data[0].account_type);
      } catch (err) {
        console.log('Error al obtener el usuario:', err);
      }
    };

    if (localStorage.getItem('tokenUser')) currentUser();
  }, []);

  return (
    <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        {/* Logo desktop */}
        <Link
          to="/home"
          className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 max-sm:hidden"
        >
          <img src="/whale-no-background.png" alt="logo" className="w-36" />
        </Link>

        {/* Logo móvil */}
        <Link to="/home" className="hidden max-sm:block">
          <img src="/whale-no-background.png" alt="logo" className="w-9" />
        </Link>

        {/* Menú móvil */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed z-50 top-0 left-0 bg-white shadow-md w-2/3 max-w-[300px] h-full p-6 overflow-auto space-y-3">
              <button
                onClick={() => setIsOpen(false)}
                className="fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                </svg>
              </button>

              <ul className="space-y-3">
                <li>
                  <Link to="/" className="block w-36 mb-6">
                    <img src="/whale-no-background.png" alt="logo" />
                  </Link>
                </li>
                {extendedNavItems.map((item, i) => (
                  <li key={i} className="border-b py-3 px-3">
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`block font-medium text-[15px] ${isActive(item.to) ? 'text-blue-700' : 'text-slate-900'
                        } hover:text-blue-700`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Navegación desktop */}
        <div className="hidden lg:flex gap-x-5 cursor">
          {extendedNavItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className={`text-sm font-medium ${isActive(item.to) ? 'text-blue-700' : 'text-slate-900'
                } hover:text-blue-700`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Acciones */}
        {localStorage.getItem('tokenUser') ? (
          <div className="flex items-center ml-auto space-x-6">
            <Link
              to="/dashboard/perfil-chat"
              className="tex-gray-200 cursor-pointer hover:text-blue-700 hover:underline font-medium text-[15px] text-slate-900"
            >
              {accountType === 'teacher_class' && <ProfesorSVG />}
              {accountType === 'student' && <AlumnSVG />}
              {accountType === 'practices_tutor' && <TutorSVG />}
            </Link>

            {/* --- AÑADIDO: botón hamburguesa SIEMPRE visible en móvil --- */}
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => localStorage.removeItem('tokenUser')}
              className="cursor-pointer border border-red-600 text-red-600 rounded-lg p-1.5 transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              <LogOutSVG className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center ml-auto space-x-6">
            <Link
              to="/log-in"
              className="font-medium text-[15px] text-blue-700 hover:underline"
            >
              Iniciar sesión
            </Link>
            <button className="px-4 py-2 text-sm rounded-sm font-medium cursor-pointer text-white border border-blue-600 bg-blue-600 transition-all duration-400 hover:bg-blue-500">
              <Link to="/teacher-register">Registrarse</Link>
            </button>

            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
