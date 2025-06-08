import { Link } from 'react-router-dom';

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
  <div className="min-h-screen flex items-center justify-center px-4 py-10">
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
              disabled
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-base cursor-not-allowed"
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
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Guardar cambios
          </button>
        </div>
      </div>


    </div>
  </div>
);

export default TutorDePrácticas;
