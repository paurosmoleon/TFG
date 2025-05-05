// Dashboard.tsx
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li>
            <NavLink
              to="memoria-practicas"
              end
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Memoria de Prácticas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="ficha-semanal"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Ficha Semanal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chats"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Chats
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
