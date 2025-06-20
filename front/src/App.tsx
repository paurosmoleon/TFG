import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/landing';
import AboutUs from './components/aboutus';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MemoriaPracticas from './components/dashboardsComponents/memoriaPracticas';
import FichaSemanal from './components/dashboardsComponents/fichaSemanal';
import Chats from './components/dashboardsComponents/chats';
import PerfilChat from './components/dashboardsComponents/perfilChat';
import PageNotFound from './components/PageNotFound';
import LogIn from './components/loginComponents/LogIn';
import SignUp from './components/loginComponents/SignUp';
import ForgottenPassword from './components/loginComponents/ForgottenPassword';
import NewPassword from './components/loginComponents/NewPassword';
import TeacherRegister from './components/loginComponents/TeacherRegister';
import Becarios from './components/Clases/Becarios';
import Clases from './components/Clases/Clases';
import CrearClase from './components/Clases/CrearClase'
import './index.css';
import AddStudent from './components/Clases/CrearAlumno';
import CrearGrupoPracticas from './components/Clases/CrearGrupoPracticas';
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
      <Route path="/teacher-register" element={<TeacherRegister />} />
      <Route path="/becarios" element={<Becarios />} />
      <Route path="/clases" element={<Clases />} />
      <Route path="/create-class" element={<CrearClase />} />
      <Route path="/create-group-practices" element={<CrearGrupoPracticas />} />

      <Route path="/add-to-class" element={< AddStudent />} />
      {/* Dashboard con rutas hijas */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="memoria-practicas" replace />} />
        <Route path="memoria-practicas" element={<MemoriaPracticas />} />
        <Route path="ficha-semanal" element={<FichaSemanal userRole={'profesor'} />} />
        <Route path="chats" element={<Chats />} />
        <Route path="perfil-chat" element={<PerfilChat />} />
      </Route>
      {/* Si no encuentra ninguna ruta, redirige a error 404 */}
      <Route path="*" element={<Navigate to="/error-404" replace />} />
    </Routes>
  );
}

export default App;
