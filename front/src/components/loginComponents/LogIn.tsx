import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EmailSVG from '../../assets/icons/EmailSVG';
import PasswordSVG from '../../assets/icons/PasswordSVG';

const LogIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('tokenUser');
    if (token) {
      navigate('/Dashboard');
    }
  });

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
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen md:flex">
      {/* Sección izquierda */}
      <div className="relative overflow-hidden md:flex w-1/2  animated-body justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">eFCT</h1>
          <p className="text-white mt-1 italic">
            "Las prácticas de empresa no tienen que ser un dolor de cabeza para
            nadie"
          </p>
          <button
            type="button"
            className="block w-28 bg-none text-white mt-4 py-2 rounded-2xl font-bold mb-2 cursor-pointer transition-all duration-500 hover:w-30 hover:bg-white hover:text-blue-500 hover:border-none"
          >
            <Link to="/home"> Saber mas →</Link>
          </button>
        </div>
        {/* Círculos decorativos */}
        <div className="absolute border-white -bottom-32 -left-40 w-80 h-80 border-4  rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute border-white -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute border-white -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute border-white -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

      {/* Formulario de login */}
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <EmailSVG className="h-5 w-5 text-gray-400" />
            <input
              name="email"
              required
              className="pl-2 outline-none border-none w-full"
              type="email"
              placeholder="Dirección de correo electrónico"
            />
          </div>

          <div className="flex items-center border-1 py-2 px-3 rounded-2xl">
            <PasswordSVG className="h-5 w-5 text-gray-400" />
            <input
              name="password"
              required
              className="pl-2 outline-none border-none w-full"
              type="password"
              placeholder="Contraseña"
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer hover:bg-blue-500 transition duration-200"
          >
            Inicio de sesión
          </button>

          <span className="text-sm ml-2 text-blue-600 hover:text-blue-500 cursor-pointer">
            <Link to="/forgotten-password">¿Olvidaste tu contraseña?</Link>
          </span>

          <span className="text-sm ml-2">
            ¿Aún no tienes cuenta?{' '}
            <Link
              to="/sign-up"
              className="text-blue-600 hover:text-blue-500 cursor-pointer"
            >
              Regístrate
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
