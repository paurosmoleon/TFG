// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing          from './components/landing';
import AboutUs          from './components/aboutus';
import Home             from './components/Home';
import Dashboard        from './components/dashbboard'; // Recuerda la doble b
import MemoriaPracticas from './components/dashboardsComponents/memoriaPracticas';
import FichaSemanal     from './components/dashboardsComponents/fichaSemanal';
import Chats            from './components/dashboardsComponents/chats';
import PerfilChat       from './components/dashboardsComponents/perfilChat';
import './index.css';

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/"         element={<Landing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home"     element={<Home />} />

      {/* Dashboard con rutas hijas */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Al visitar /dashboard → redirige a /dashboard/memoria-practicas */}
        <Route
          index
          element={<Navigate to="memoria-practicas" replace />}
        />
        <Route
          path="memoria-practicas"
          element={<MemoriaPracticas />}
        />
        <Route
          path="ficha-semanal"
          element={<FichaSemanal />}
        />
        <Route
          path="chats"
          element={<Chats />}
        />
          <Route
          path="perfil-chat"
          element={<PerfilChat />}
        />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
