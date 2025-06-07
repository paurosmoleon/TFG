import { Link } from 'react-router-dom';
import ChatsSVG from '../../assets/icons/ChatsSVG';

interface TutorDePrácticasProps {
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

const TutorDePrácticas: React.FC<TutorDePrácticasProps> = ({
  form,
  handleChange,
  handleSave,
}) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
    <div className="flex flex-col gap-y-10 items-center justify-center w-full max-w-4xl">

      {/* Formulario */}
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Perfil</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Nombre:</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Teléfono:</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">DNI:</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="dni"
              value={form.dni}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Rol:</label>
            <input
              disabled
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base cursor-not-allowed"
              name="account_type"
              value={
                form.account_type === 'teacher_class'
                  ? 'Tutor de prácticas'
                  : form.account_type
              }
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <Link
            to="/forgotten-password"
            className="text-blue-600 hover:underline text-sm"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Guardar cambios
          </button>
        </div>
      </div>

      {/* Tabla responsive */}
      <div className="w-full overflow-x-auto bg-white shadow-lg rounded-2xl p-4">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border-b border-gray-300 font-semibold">Alumno</th>
              <th className="px-4 py-3 border-b border-gray-300 font-semibold">Enviar Mensaje</th>
              <th className="px-4 py-3 border-b border-gray-300 font-semibold">Tutor Laboral</th>
              <th className="px-4 py-3 border-b border-gray-300 font-semibold">Enviar Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {[
              { student: 'Lucía Gómez', tutor: 'Jorge Martínez' },
              { student: 'David López', tutor: 'Ana Torres' },
            ].map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-200">{row.student}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <Link to="/dashboard/chats">
                    <ChatsSVG className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
                  </Link>
                </td>
                <td className="px-4 py-2 border-b border-gray-200">{row.tutor}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <Link to="/dashboard/chats">
                    <ChatsSVG className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  </div>
);

export default TutorDePrácticas;
