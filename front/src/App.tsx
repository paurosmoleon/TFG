// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing            from './components/landing';
import AboutUs            from './components/aboutus';
import Home               from './components/Home';
import Dashboard          from './components/dashbboard'; //recuerda la doble b
import MemoriaPracticas   from './components/dashboardsComponents/memoriaPracticas';
import FichaSemanal       from './components/dashboardsComponents/fichaSemanal';
import Chats              from './components/dashboardsComponents/chats';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"           element={<Landing />} />
        <Route path="/about-us"   element={<AboutUs />} />
        <Route path="/home"        element={<Home />} />

        {/* Dashboard con rutas anidadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* ruta por defecto en /dashboard */}
          <Route index                   element={<MemoriaPracticas />} />
          {/* sub-rutas */}
          <Route path="memoria-practicas" element={<MemoriaPracticas />} />
          <Route path="ficha-semanal"     element={<FichaSemanal />} />
          <Route path="chats"             element={<Chats />} />
        </Route>

        {/* cualquier otra ruta redirige a la landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
