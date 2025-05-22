import axios from 'axios';
import { Link } from 'react-router-dom';
import UserSVG from '../../assets/icons/UserSVG';
import EmailSVG from '../../assets/icons/EmailSVG';
import PasswordSVG from '../../assets/icons/PasswordSVG';

const LogIn = () => {
  interface LoginResponse {
    access_token: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      const res = await axios.post<LoginResponse>(
        'https://tfg-production-f839.up.railway.app/users/login',
        {
          email: target.email.value,
          password: target.password.value,
        }
      );

      localStorage.setItem('tokenUser', 'Bearer ' + res.data.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen md:flex">
      {/* Sección izquierda con fondo de gradiente y contenido promocional */}
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">eFCT</h1>
          <p className="text-white mt-1 italic">
            "Tus prácticas de empresa no tienen que ser un dolor de cabeza para
            nadie"
          </p>
          <button
            type="button"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 cursor-pointer"
          >
            <Link to="/home"> Saber más →</Link>
          </button>
        </div>
        {/* Círculos decorativos */}
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

      {/* Formulario de login */}
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <UserSVG className='h-5 w-5 mx-auto my-auto text-gray-400'/>
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
          <EmailSVG className='h-5 w-5 mx-auto my-auto text-gray-400'/>
            <input
              className="pl-2 outline-none border-none w-full"
              type="email"
              name="email"
              placeholder="Dirección de correo electrónico"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <PasswordSVG className='h-5 w-5 mx-auto my-auto text-gray-400'/>
            <input
              className="pl-2 outline-none border-none w-full"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <Link to="/forgotten-password"> ¿Olvidaste tu contraseña? </Link>
          </span>
          <span className="text-sm  ml-2">
            ¿Aún no tienes cuenta?{' '}
            <Link to="/sign-up" className="hover:text-blue-500 cursor-pointer">
              Regístrate
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
