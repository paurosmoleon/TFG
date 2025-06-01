const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 px-15 py-10  border-gray-900">
        {/* Left column */}
        <div className="lg:w-1/2 space-y-6 ">
          <h2 className="text-3xl font-bold">Sobre nosotros</h2>
          <p className="text-sm text-gray-700 font-normal">
            Nuestro equipo esta conformado por 4 amigos que han hecho tanto el grado medio de Microinformática, 
            como el grado superior de Desarrollo de aplicaciones web. Llevamos creando proyectos en conjunto a lo largo de estos 4 años 
            que llevamos conociendonos y culmina con la creación de este proyecto ambicioso "eFCT" con el cual ponemos todo nuestro 
            empeño, dedicación y conocimiento para su desarrollo y creación.
          </p>
        </div>

        {/* Right column */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="rounded-lg flex items-center justify-center text-white text-sm">
            <img
              src="/fotoAboutUs.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
