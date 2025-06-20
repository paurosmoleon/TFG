import DecryptedText from './StyleComponents/DecryptedText';
import FadeContent from './StyleComponents/FadeContent';
import AnimatedContent from './StyleComponents/AnimatedContent';
export default function Home() {
  return (
    <div className="space-y-16">
      {/* Banner único con overlay */}
<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
  <div className="relative h-120 overflow-hidden">
    <img
      src="/banner inicio.png"
      alt="Banner FCT"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute -inset-30 lg:inset-0 md:inset-0 xl:inset-0 bg-opacity-30 flex items-center justify-start px-50 mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg w-70">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Gestión de FCT eficiente y colaborativa
        </h2>
        <p className="text-gray-600">
          Centraliza tus fichas semanales, diarios y comunicaciones en un solo lugar.
        </p>
      </div>
    </div>
  </div>
</FadeContent>
<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="anticipate"
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
        <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Nuestras principales funcionalidades
          </h2>
        </div>
      </section>
</AnimatedContent>

<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="anticipate"
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Fichas Semanales</h3>
            <p>
              Crea, edita y firma fichas semanales de forma sencilla y rápida.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Diario de prácticas</h3>
            <p>
              Escribe y consulta tu memoria de prácticas para descargarla al
              final de tus prácticas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Login y Seguridad</h3>
            <DecryptedText
              text="Acceso protegido con datos cifrados y hash de alta seguridad."
              animateOn="view"
              revealDirection="center"
              speed={120}
            />
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Firma digital</h3>
            <DecryptedText
              text="Firma y consulta fichas semanales directamente desde la plataforma."
              animateOn="view"
              revealDirection="center"
              speed={120}
            />
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Exportación a PDF</h3>
            <p>Descarga tu diario y fichas en PDF listos para entrega.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Mensajería directa</h3>
            <p>Comunicación fluida entre alumnos, tutores y empresas.</p>
          </div>
        </div>
      </section>
</AnimatedContent>
      
<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="anticipate"
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-12">
        <img
          src="/requirement.jpg"
          alt="Requisitos no funcionales"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Y no solo eso...</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Seguridad:</strong>{" "}
              <DecryptedText
                text="Cifrado y protección de datos sensibles."
                animateOn="view"
                revealDirection="center"
                speed={120}

              />
            </li>

            <li>
              <strong>Disponibilidad:</strong> Acceso continuo y alta tolerancia
              a fallos.
            </li>
            <li>
              <strong>Usabilidad:</strong> Navegación intuitiva para todos los
              usuarios.
            </li>
            <li>
              <strong>Rendimiento:</strong> Respuesta ágil bajo gran carga.
            </li>
          </ul>
        </div>
      </section>
</AnimatedContent>
      
<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={true}
  duration={1.2}
  ease="anticipate"
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
<section className="space-y-12 px-4 py-6 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-indigo-50 p-8 rounded-lg md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-center">Misión</h2>
            <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-600">
              “Voy a buscar en Internet una manera de facilitarme el control de
              las FCT con mis alumnos”
            </blockquote>
            <p className="mt-2 text-gray-700">
              Ofrecer una solución centralizada e intuitiva para el seguimiento
              de las prácticas formativas.
            </p>
          </div>
          <img
            src="/mission.jpg"
            alt="Misión"
            className="w-full h-auto rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section>
</AnimatedContent>
<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.0}
  ease="anticipate"
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
       <section className="space-y-12 px-4 py-6 bg-white">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="bg-teal-50 p-8 rounded-lg md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-center">Visión</h2>
            <blockquote className="border-l-4 border-teal-300 pl-4 italic text-gray-600">
              “Hacer de esta aplicación una herramienta que sea usada para
              evitar largas horas de esperas entre participantes de FCT”
            </blockquote>
            <p className="mt-2 text-gray-700">
              Ser la plataforma de referencia en gestión de prácticas en España,
              promoviendo eficiencia y colaboración.
            </p>
          </div>
          <img
            src="/vision.jpg"
            alt="Visión"
            className="w-full h-auto rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section> 
  </AnimatedContent>      

<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.0}
  ease="anticipate"
  initialOpacity={0}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
 <section className="px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">Valores</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Innovación</h3>
            <p>Mejoras continuas en cada proceso.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Accesibilidad</h3>
            <p>Diseñada para todo tipo de usuarios y regiones.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Eficiencia</h3>
            <p>Optimización de tiempos y recursos.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Colaboración</h3>
            <p>Comunicación transparente entre usuarios.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Seguridad</h3>
            <DecryptedText
              text="Protección de datos y confidencialidad."
              animateOn="view"
              revealDirection="center"
            />
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Y no parar</h3>
            <p>Siempre buscamos mejorar.</p>
          </div>
        </div>
      </section>
</AnimatedContent>
    </div>
  );
}
