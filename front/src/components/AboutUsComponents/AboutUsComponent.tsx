import GlareHover from "../StyleComponents/GlareHover";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 py-10 max-w-7xl mx-auto">
      {/* Left column */}
      <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
        <h2 className="text-4xl font-bold">Sobre nosotros</h2>
        <p className="text-base text-gray-700 font-normal leading-relaxed">
          Nuestro equipo está conformado por 4 amigos que han hecho tanto el Grado Medio de Sistemas Microinformáticos y Redes,
          como el grado superior de Desarrollo de aplicaciones web. Llevamos creando proyectos en conjunto a lo largo de estos 4 años
          que llevamos conociéndonos y culmina con la creación de este proyecto ambicioso "eFCT" con el cual ponemos todo nuestro
          empeño, dedicación y conocimiento para su desarrollo y creación.
        </p>
      </div>

      {/* Right column */}
      <div className="lg:w-1/2 flex items-center justify-center">
        {/* Wrapper to preserve rounded corners and hide overflow from GlareHover */}
        <div className="rounded-lg overflow-hidden shadow-lg max-w-md w-full">
          <div className="w-full h-full">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              style={{ width: "100%", height: "100%" }}
              borderColor="white"
            >
              <img
                src="/fotoAboutUs.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
