import { Link } from 'react-router-dom';
import '../assets/styles/animacion.css';
export default function Landing() {
  return (
    <main className="flex flex-col min-h-screen animated-landing bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center">
      <div className="flex flex-col items-center px-4">
        <div className="flex justify-center items-center">
          <img
            src="/whale-no-background.png"
            alt="logo"
            className="h-[500px]"
          />
        </div>

        <section className="flex flex-wrap justify-center items-stretch items-center gap-10 p-8 text-gray-500">
          <div className="bg-white bg-opacity-8 p-6 rounded-lg flex-1 max-w-[300px]">
            <h2 className="text-2xl mb-2">Optimización y sencillez</h2>
            <p>
              Al desarrollar la aplicación una de los objetivos principales es
              el facilitar los trámites de prácticas tanto a alumnos, profesores
              y tutores de prácticas.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-[300px]">
            <h2 className="text-2xl mb-2">Agrupación</h2>
            <p>
              Desarrollando la aplicación permitiría que los usuarios solo
              tengan que tener en cuenta la propia aplicación web a la hora de
              gestionar todos los documentos y fichas a entregar.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-[300px]">
            <h2 className="text-2xl mb-2">Utilidad</h2>
            <p>
              Hacer de esta aplicación una herramienta que sea usada para evitar
              largas horas de esperas entre participantes de fct. Una aplicación
              que venga a la mente cuando un profesor diga: “Voy a buscar en
              Internet una manera de facilitarme el control de las FCT con mis
              alumnos”
            </p>
          </div>
        </section>
        <div className="flex justify-center gap-4 mb-6">
          <Link
            to="/home"
             className="block w-28 bg-none text-white mt-4 py-2 rounded-2xl font-bold mb-2 cursor-pointer transition-all duration-500 hover:w-30 hover:bg-white hover:text-blue-500 hover:border-none"
          >
            Saber más →
          </Link>
        </div>
      </div>
    </main>
  );
}
