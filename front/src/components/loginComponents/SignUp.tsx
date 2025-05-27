import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserSVG from '../../assets/icons/UserSVG';
import DNISVG from '../../assets/icons/DNISVG';
import PhoneSVG from '../../assets/icons/PhoneSVG';
import EmailSVG from '../../assets/icons/EmailSVG';
import PasswordSVG from '../../assets/icons/PasswordSVG';
import AlumnSVG from '../../assets/icons/AlumnSVG';
import ProfesorSVG from '../../assets/icons/ProfesorSVG';
import TutorSVG from '../../assets/icons/TutorSVG';
import '../../assets/styles/animacion.css';
import { useEffect } from 'react';

const SignUp = () => {
  interface RegisterResponse {
    access_token: string;
  }

  const navigate = useNavigate();
  // Redirigir si ya está logueado
  useEffect(() => {
    const token = localStorage.getItem('tokenUser');
    if (token) {
      navigate('/Dashboard'); 
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
      dni: { value: string };
      email: { value: string };
      phone: { value: string };
      role: { value: string };
    };

    const { name, password, confirmPassword, dni, email, phone, role } = target;

    // Validación simple
    if (
      !name.value ||
      !password.value ||
      !confirmPassword.value ||
      !dni.value ||
      !email.value ||
      !phone.value ||
      !role.value
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const res = await axios.post<RegisterResponse>(
        'https://tfg-production-f839.up.railway.app/users/register',
        {
          name: name.value,
          password: password.value,
          dni: dni.value,
          email: email.value,
          phone: phone.value,
          account_type: role.value,
        }
      );

      if (res.status === 200) {
        localStorage.setItem('tokenUser', 'Bearer ' + res.data.access_token);
        alert('Usuario creado con éxito');
        navigate('/dashboard');
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert('Error al registrar el usuario.');
      }
      console.error(err);
    }
  };

  return (
    <div className="h-screen md:flex">
      {/* Formulario con logo */}
      <div className="flex md:w-1/2 flex-col justify-center py-10 items-center bg-white">
        <form className="bg-white w-full max-w-md px-8" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <UserSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="name"
              placeholder="Nombre completo"
            />
          </div>

          {/* DNI */}
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <DNISVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="dni"
              placeholder="DNI"
            />
          </div>

          {/* Teléfono */}
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <PhoneSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="phone"
              placeholder="Nº teléfono"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <EmailSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="email"
              placeholder="Correo electrónico"
            />
          </div>

          {/* Contraseña */}
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <PasswordSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>

          {/* Repetir contraseña */}
          <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
            <PasswordSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
            <input
              className="pl-2 outline-none border-none w-full"
              type="password"
              name="confirmPassword"
              placeholder="Repetir contraseña"
            />
          </div>

          {/* Roles */}
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecciona tu rol:
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
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
                  value="practices_tutor"
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
                  value="teacher_class"
                  className="form-radio text-indigo-600"
                />
                <span className="flex items-center gap-1 text-gray-700">
                  <ProfesorSVG className="h-5 w-5 text-gray-400" />
                  Tutor de prácticas
                </span>
              </label>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer hover:bg-blue-500 transition duration-300"
          >
            Registrarse
          </button>

          {/* Enlaces */}
          <span className="text-sm ml-2 text-blue-600 hover:text-blue-500 cursor-pointer">
            <Link to="/forgotten-password">¿Olvidaste tu contraseña?</Link>
          </span>
          <br />
          <span className="text-sm ml-2">
            ¿Ya tienes cuenta?{' '}
            <Link
              to="/log-in"
              className="text-blue-600 hover:text-blue-500 cursor-pointer"
            >
              Inicia sesión
            </Link>
          </span>
        </form>
      </div>

      {/* Fondo decorativo */}
      <div className="animated-body relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-blue-700 to-blue-500 justify-center items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">eFCT</h1>
          <p className="text-white mt-1 italic">
            "Tus prácticas de empresa no tienen que ser un dolor de cabeza para
            nadie"
          </p>
          <button
            type="button"
            className="block w-28 bg-none text-white mt-4 py-2 rounded-2xl font-bold mb-2 cursor-pointer transition-all duration-500 hover:w-30 hover:bg-white hover:text-blue-500 hover:border-none"
          >
            <Link to="/home">Saber más →</Link>
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-white rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-white rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 border-white rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 border-white rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </div>
  );
};

export default SignUp;
