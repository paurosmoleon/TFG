// Dashboard.jsx
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="relative min-h-screen">
      <aside
        className={`
          /* Móvil*/
          fixed bottom-0 left-0 w-full  py-2 
          flex justify-around items-center

          /* Desktop */
          md:fixed md:top-0 md:left-0 md:h-full  md:w-16 
          md:flex-col md:items-center md:py-4 md:px-2 
          md:shadow-none
        `}
      >
        <ul className="flex md:w-full justify-around h-10 px-15 w-full md:justify-center items-center md:flex-col md:h-55  bg-white border border-gray-300">
          {/* 1 */}
          <li className="md:mb-6 ">
            <NavLink to="memoria-practicas" end>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="#ccc" />
              </svg>
            </NavLink>
          </li>

          {/* 2 */}
          <li className="md:mb-6">
            <NavLink to="ficha-semanal">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#ccc" />
              </svg>
            </NavLink>
          </li>

          {/* 3 */}
          <li className="">
            <NavLink to="chats">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <polygon points="12,2 22,22 2,22" fill="#ccc" />
              </svg>
            </NavLink>
          </li>
          {/* Separador */}
          <li
            className={`
              /* Móvil*/
              block w-px h-6 bg-gray-300

              /* Desktop: */
              md:w-full md:h-px md:mx-0 md:my-4
            `}
          />
          {/* 4 */}
          <li>
            <NavLink to="perfil-chat">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <polygon points="12,2 22,22 2,22" fill="#ccc" />
              </svg>
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
