import { Link } from 'react-router-dom';
import '../assets/styles/animacion.css';
import LogoSVG from '../assets/icons/LogoSVG';
import AnimatedContent from './StyleComponents/AnimatedContent';
export default function Landing() {
  return (
    <main className="flex flex-col min-h-screen animated-landing bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center">
      <div className="flex flex-col items-center px-4 py-0 ">
        {/* Logo: se adapta según el tamaño de pantalla */}
        <div className="flex justify-center items-center ">
          <LogoSVG className="h-40 sm:h-60 md:h-80 lg:h-[400px] xl:h-[500px] w-auto cursor-default" />
        </div>


        {/* Tarjetas: diseño flexible y adaptativo */}
        <section className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 mb-10 w-full max-w-6xl">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-sm min-w-[260px]">
              <h2 className="text-xl sm:text-2xl mb-2 text-gray-700">Optimización y sencillez</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Al desarrollar la aplicación uno de los objetivos principales es facilitar los trámites de prácticas tanto a alumnos, profesores y tutores de prácticas.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-sm min-w-[260px]">
              <h2 className="text-xl sm:text-2xl mb-2 text-gray-700">Agrupación</h2>
              <p className="text-sm sm:text-base text-gray-700">
                La aplicación permitiría que los usuarios solo tengan que tener en cuenta una única plataforma para gestionar todos los documentos y fichas a entregar.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0}
            delay={0.3}
          >
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-sm min-w-[260px] invisible sm:visible ">
            <h2 className="text-xl sm:text-2xl mb-2 text-gray-700">Utilidad</h2>
            <p className="text-sm sm:text-base text-gray-700">
              Una herramienta útil que ahorre tiempo y esfuerzo. Cuando un profesor piense en facilitar el control de las FCT, esta app debe ser la primera opción.

            </p>
          </div>
          </AnimatedContent>

        </section>

        {/* Botón */}
        <div className="flex justify-center mb-6">
          <Link
            to="/home"
            className="block w-32 sm:w-36 bg-none  text-white mt-4 py-2 px-4 rounded-2xl font-bold transition-all duration-500 hover:bg-white hover:text-blue-500 hover:px-5"
          >
            Saber más →
          </Link>
        </div>
      </div>
    </main>
  );
}
