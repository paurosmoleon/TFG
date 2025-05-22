import { Link } from 'react-router-dom';
import axios from 'axios';
import UserSVG from '../../assets/icons/UserSVG';
import DNISVG from '../../assets/icons/DNISVG';
import PhoneSVG from '../../assets/icons/PhoneSVG';
import EmailSVG from '../../assets/icons/EmailSVG';
import PasswordSVG from '../../assets/icons/PasswordSVG';
import AlumnSVG from '../../assets/icons/AlumnSVG';
import ProfesorSVG from '../../assets/icons/ProfesorSVG';
import TutorSVG from '../../assets/icons/TutorSVG';

const SignUp = () => {
  interface RegisterResponse {
    access_token: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      password: { value: string };
      dni: { value: string };
      email: { value: string };
      phone: { value: string };
    };

    try {
      const res = await axios.post<RegisterResponse>(
        'https://tfg-production-f839.up.railway.app/users/register',
        {
          name: target.name.value,
          password: target.password.value,
          dni: target.dni.value,
          email: target.email.value,
          phone: target.phone.value,
        }
      );

      if (res.status === 200) {
        localStorage.setItem('tokenUser', 'Bearer ' + res.data.access_token);
        alert('Usuario creado con éxito');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen md:flex">
      {/* Formulario con logo */}
      <div className="flex md:w-1/2 flex-col justify-center py-10 items-center bg-white">
        <form className="bg-white w-full max-w-md px-8" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <UserSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="name"
              placeholder="Nombre completo"
            />
          </div>

          {/* DNI */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <DNISVG className="h-5 w-5 mx-auto my-auto text-gray-400" />

            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="dni"
              placeholder="DNI"
            />
          </div>

          {/* Telefono */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <PhoneSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />

            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="phone"
              placeholder="Nº telefono"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <EmailSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="email"
              placeholder="Correo electrónico"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <PasswordSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>

          {/*Confirm Password. No validation logic implemented */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <PasswordSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />

            <input
              className="pl-2 outline-none border-none w-full"
              type="password"
              placeholder="Repetir contraseña"
            />
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecciona tu rol:
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="alumno"
                  className="form-radio text-indigo-600"
                />
                <span className="flex items-center gap-1 text-gray-700">
                  <AlumnSVG className="h-5 w-5 text-gray-400" />
                  Alumno
                </span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="tutor_laboral"
                  className="form-radio text-indigo-600"
                />
                <span className="flex items-center gap-1 text-gray-700">
                  <TutorSVG className="h-5 w-5 text-gray-400" />
                  Tutor laboral
                </span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="tutor_practicas"
                  className="form-radio text-indigo-600"
                />
                <span className="flex items-center gap-1 text-gray-700">
                  <ProfesorSVG className="h-5 w-5 text-gray-400" />
                  Tutor de prácticas
                </span>
              </label>
            </div>
          </div>
          <button className="cursor-pointer border-2 p-3 rounded-2xl hover:border-indigo-600 hover:text-indigo transition duration-200">
            Hola
          </button>
          {/* Botón de registro */}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer hover:bg-indigo-700 transition duration-200"
          >
            Registrarse
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <Link to="/forgotten-password"> ¿Olvidaste tu contraseña? </Link>
          </span>
          <span className="text-sm  ml-2">
            ¿Ya tienes cuenta?{' '}
            <Link to="/log-in" className="hover:text-blue-500 cursor-pointer">
              Inicia sesión
            </Link>
          </span>
        </form>
      </div>
      {/* Fondo degradado con círculos a la derecha */}
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-center items-center hidden">
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
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </div>
  );
};

export default SignUp;
