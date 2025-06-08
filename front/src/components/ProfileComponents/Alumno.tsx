import { Link } from 'react-router-dom';
interface AlumnoProps {
  form: {
    name: string;
    phone: string;
    dni: string;
    account_type: string;
    empresa: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

const Alumno: React.FC<AlumnoProps> = ({ form, handleChange, handleSave }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Perfil</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Nombre:</label>
          <input
            className="text-lg font-medium text-gray-900 w-full border rounded px-2 py-1"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Teléfono:</label>
          <input
            className="text-lg font-medium text-gray-900 w-full border rounded px-2 py-1"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">DNI:</label>
          <input
            className="text-lg font-medium text-gray-900 w-full border rounded px-2 py-1"
            name="dni"
            value={form.dni}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Rol:</label>
          <input
            disabled
            className="text-lg font-medium text-gray-900 w-full border border-gray-300 rounded bg-gray-100 px-2 py-1"
            name="account_type"
            value={form.account_type === 'student' ? 'Alumno' : form.account_type}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Empresa:</label>
          <input
            disabled
            className="text-lg font-medium text-gray-900 w-full border border-gray-300 rounded bg-gray-100 px-2 py-1"
            name="empresa"
            value={form.empresa}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="text-blue-600 hover:underline text-sm">
          <Link to="/forgotten-password"> ¿Olvidaste tu contraseña? </Link>
        </span>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  </div>
);

export default Alumno;
