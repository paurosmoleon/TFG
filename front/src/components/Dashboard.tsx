import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import MemoriaSVG from '../assets/icons/MemoriaSVG';
import FichaSemanalSVG from '../assets/icons/FichaSemanalSVG';
import ChatsSVG from '../assets/icons/ChatsSVG';
import PerfilSVG from '../assets/icons/PerfilSVG';
import Iridescence from './StyleComponents/Iridescence';
import { useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirigir si no está logueado
  useEffect(() => {
    const token = localStorage.getItem('tokenUser');
    if (!token) {
      navigate('/log-in');
    }
  });

  const showIridescenceBackground = location.pathname === '/dashboard/perfil-chat';

  return (
    <div className="relative min-h-screen">
      {showIridescenceBackground && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -10,
          }}
        >
          <Iridescence
            color={[0, 0, 1]}
            mouseReact={true}
            amplitude={0.1}
            speed={2.0}
          />
        </div>
      )}

      <aside
        className="
          /* Móvil */
          fixed bottom-0 left-0 w-full py-2
          flex justify-around items-center

          /* Desktop */
          md:fixed md:top-0 md:left-0 md:h-full md:w-16
          md:flex-col md:items-center md:py-4 md:px-2 md:shadow-none rounded-4xl
        "
      >
        <ul
          className="
            flex justify-around items-center w-full h-10 px-4
            bg-white border border-gray-300 rounded-2xl

            md:flex-col md:justify-center md:w-full md:h-auto
            md:py-4 md:px-0
          "
        >
          <li className="md:mb-6">
            <NavLink to="memoria-practicas" end>
              <MemoriaSVG className="w-6 h-6" />
            </NavLink>
          </li>

          <li className="md:mb-6">
            <NavLink to="ficha-semanal">
              <FichaSemanalSVG className="w-6 h-6" />
            </NavLink>
          </li>

          <li>
            <NavLink to="chats">
              <ChatsSVG className="w-6 h-6" />
            </NavLink>
          </li>

          <li className="block w-px h-6 bg-gray-300 md:w-full md:h-px md:my-4" />

          <li>
            <NavLink to="perfil-chat">
              <PerfilSVG className="w-6 h-6" />
            </NavLink>
          </li>
        </ul>
      </aside>

      <main className="pb-12 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
}
