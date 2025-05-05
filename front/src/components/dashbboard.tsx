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
            >
              Memoria de Prácticas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="ficha-semanal"
            >
              Ficha Semanal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chats"  
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
