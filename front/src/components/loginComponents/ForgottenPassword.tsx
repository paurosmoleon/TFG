import { Link } from 'react-router-dom';
import UserSVG from '../../assets/icons/UserSVG';
import EmailSVG from '../../assets/icons/EmailSVG';
const ForgottenPassword = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Formulario de login */}
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          {/* Username */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <UserSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="flex items-center mt-4 mb-4">
            <span className="flex-grow border-b dark:border-gray-600"></span>

            <span className="px-2 text-xs text-center text-gray-500 uppercase dark:text-gray-400">
              O
            </span>

            <span className="flex-grow border-b dark:border-gray-600"></span>
          </div>

          {/* Email */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <EmailSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="email"
              placeholder="Dirección de correo electrónico"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
          <div className="flex flex-col items-center text-center mt-4 mb-4 space-y-4">
            <div>
              <span className="text-sm block">¿Recordaste tu contraseña?</span>
              <Link
                to="/log-in"
                className="text-sm text-blue-600 hover:underline"
              >
                Inicia sesión
              </Link>
            </div>
            <div>
              <span className="text-sm block">¿Aún no tienes cuenta?</span>
              <Link
                to="/sign-up"
                className="text-sm text-blue-600 hover:underline"
              >
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
