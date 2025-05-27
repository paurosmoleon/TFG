export default function Home() {
  return (
    <div className="space-y-16">
      {/* Banner único con overlay */}
      <div className="relative h-120 overflow-hidden">
        {/* Imagen apaisada */}
        <img
          src="../../public/banner inicio.png"
          alt="Banner FCT"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay con tarjeta alineada a la izquierda */}
        <div className="absolute inset-30 lg:inset-0 md:inset-0 xl:inset-0 bg-opacity-30 flex items-center justify-start px-50 mx-auto">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg w-70">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Gestión de FCT eficiente y colaborativa
            </h2>
            <p className="text-gray-600">
              Centraliza tus fichas semanales, diarios y comunicaciones en un
              solo lugar.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Nuestras principales funcionalidades
          </h2>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Subida de plantillas</h3>
            <p>
              Sube tus plantillas semanales, con una opción por defecto
              integrada.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Diario de prácticas</h3>
            <p>
              Escribe y consulta en vistas calendario o página según prefieras.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Login y Seguridad</h3>
            <p>
              Acceso protegido con datos cifrados y protocolos de alta
              seguridad.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Firma digital</h3>
            <p>
              Firma y consulta fichas semanales directamente desde la
              plataforma.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Exportación a PDF</h3>
            <p>Descarga tu diario en PDF listo para entrega.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Mensajería directa</h3>
            <p>Comunicación fluida entre alumnos, tutores y empresas.</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-12">
        <img
          src="https://placehold.co/600x400?text=Requisitos&bg=ddd&fc=444"
          alt="Requisitos no funcionales"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Y no solo eso...</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Seguridad:</strong> Cifrado y protección de datos
              sensibles.
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
            src="https://placehold.co/600x400?text=Mision&bg=aaf&fc=225"
            alt="Misión"
            className="w-full h-auto rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section>

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
            src="https://placehold.co/600x400?text=Vision&bg=afa&fc=243"
            alt="Visión"
            className="w-full h-auto rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section>

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
            <p>Comunicación transparente entre actores.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Seguridad</h3>
            <p>Protección de datos y confidencialidad.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Y no parar</h3>
            <p>Siempre buscamos mejorar.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
