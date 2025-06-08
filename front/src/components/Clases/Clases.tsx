import { Link } from 'react-router-dom';
import Aurora from '../StyleComponents/Aurora';

const Clases = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Fondo Aurora */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["blue", "white", "blue"]}
          blend={1}
          amplitude={3.0}
          speed={1} />
      </div>

      {/* Contenido principal */}
      <div className="w-full max-w-md bg-white border border-gray-600 rounded-2xl shadow-lg p-6 space-y-4 z-10">
        <h1 className="text-2xl font-semibold text-black text-center mb-4">
          Panel de Administración
        </h1>

        <Link
          to="/sign-up"
          className="block text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:brightness-110 transition duration-200 shadow"
        >
          Crear Alumno / Tutor
        </Link>

        <Link
          to="/create-class"
          className="block text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:brightness-110 transition duration-200 shadow"
        >
          Crear Clase
        </Link>

        <Link
          to="/create-group-practices"
          className="block text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:brightness-110 transition duration-200 shadow"
        >
          Crear Grupo de Prácticas
        </Link>
      </div>
    </div>
  );
};

export default Clases;
