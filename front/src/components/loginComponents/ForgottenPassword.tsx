import { Link } from 'react-router-dom';

const ForgottenPassword = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Formulario de login */}
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          {/* Username */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
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
