import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MemoriaPracticas from './components/DashboardsComponents/MemoriaPracticas';
import FichaSemanal from './components/DashboardsComponents/FichaSemanal';
import Chats from './components/DashboardsComponents/chats';
import PerfilChat from './components/DashboardsComponents/PerfilChat';
import PageNotFound from './components/PageNotFound';
import LogIn from './components/LoginComponents/LogIn';
import SignUp from './components/LoginComponents/SignUp';
import ForgottenPassword from './components/LoginComponents/ForgottenPassword';
import NewPassword from './components/LoginComponents/NewPassword';
import './index.css';

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Landing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home" element={<Home />} />
      <Route path="/error-404" element={<PageNotFound />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgotten-password" element={<ForgottenPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      {/* Dashboard con rutas hijas */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Al visitar /dashboard → redirige a /dashboard/memoria-practicas */}
        <Route index element={<Navigate to="memoria-practicas" replace />} />
        <Route path="memoria-practicas" element={<MemoriaPracticas />} />
        <Route path="ficha-semanal" element={<FichaSemanal userRole="alumno"/>} />
        <Route path="chats" element={<Chats />} />
        <Route path="perfil-chat" element={<PerfilChat />} />
      </Route>

      {/* Si no encuentra ninguna ruta, redirige a error 404 */}
      <Route path="*" element={<Navigate to="/error-404" replace />} />
    </Routes>
  );
}

export default App;
