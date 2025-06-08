import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import UserSVG from '../../assets/icons/UserSVG';
import DNISVG from '../../assets/icons/DNISVG';
import PhoneSVG from '../../assets/icons/PhoneSVG';
import EmailSVG from '../../assets/icons/EmailSVG';
import PasswordSVG from '../../assets/icons/PasswordSVG';
import '../../assets/styles/animacion.css';
import { useEffect } from 'react';
import BlurText from '../StyleComponents/BlurText';


const TeacherRegister = () => {
    interface RegisterResponse {
        access_token: string;
    }

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('tokenUser');
        if (token) {
            navigate('/Dashboard');
        }
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            password: { value: string };
            confirmPassword: { value: string };
            dni: { value: string };
            email: { value: string };
            phone: { value: string };
        };

        const { name, password, confirmPassword, dni, email, phone } = target;

        if (
            !name.value ||
            !password.value ||
            !confirmPassword.value ||
            !dni.value ||
            !email.value ||
            !phone.value
        ) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }

        if (password.value !== confirmPassword.value) {
            toast.error('Las contraseñas no coinciden.');
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
                    account_type: 'teacher_class',
                }
            );

            if (res.status === 200) {
                localStorage.setItem('tokenUser', 'Bearer ' + res.data.access_token);
                toast.success('Usuario creado con éxito');
                navigate('/dashboard');
            }
        } catch (err: any) {
            if (err.response?.data?.message) {
                toast.error(err.response.data.message);
            } else {
                toast.error('Error al registrar el usuario.');
            }
            console.error(err);
        }
    };

    return (
        <div className="h-screen md:flex">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="flex md:w-1/2 flex-col justify-center py-10 items-center bg-white">
                <form className="bg-white w-full max-w-md px-8" onSubmit={handleSubmit}>
                    {/* Inputs */}
                    <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
                        <UserSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="text"
                            name="name"
                            placeholder="Nombre completo"
                        />
                    </div>

                    <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
                        <DNISVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="text"
                            name="dni"
                            placeholder="DNI"
                        />
                    </div>

                    <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
                        <PhoneSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="text"
                            name="phone"
                            placeholder="Nº teléfono"
                        />
                    </div>

                    <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
                        <EmailSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="text"
                            name="email"
                            placeholder="Correo electrónico"
                        />
                    </div>

                    <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
                        <PasswordSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="flex items-center border-1 py-2 px-3 rounded-2xl mb-4">
                        <PasswordSVG className="h-5 w-5 mx-auto my-auto text-gray-400" />
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="password"
                            name="confirmPassword"
                            placeholder="Repetir contraseña"
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer hover:bg-blue-500 transition duration-300"
                    >
                        Registrarse
                    </button>

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

            {/* Parte derecha con animación */}
            <div className="animated-body relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-blue-700 to-blue-500 justify-center items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">
                        <BlurText
                            text="eFCT"
                            delay={10}
                            animateBy="words"
                            direction="top"
                        />
                    </h1>
                    <BlurText
                        text='"Tus prácticas de empresa no tienen que ser un dolor de cabeza para nadie"'
                        delay={10}
                        animateBy="words"
                        direction="top"
                        className="text-white mt-1 italic"
                    />
                    <button
                        type="button"
                        className="block w-28 bg-none text-white mt-4 py-2 rounded-2xl font-bold mb-2 cursor-pointer transition-all duration-500 hover:w-30 hover:bg-white hover:text-blue-500 hover:border-none"
                    >
                        <Link to="/home">
                        Saber más →</Link>
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

export default TeacherRegister;
