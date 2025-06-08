import LinkedIn from '../../assets/icons/LinkedIn';
import AnimatedContent from "../StyleComponents/AnimatedContent";

const profiles = [
  {
    nombre: "Alejandro Castillo Ramos",
    puesto: "Desarrollador Frontend",
    empresa: "Acuabit",
    empresaUrl: "https://acuabit.es/",
    frase: "Tal vez no sea el más brillante, pero siempre estoy dispuesto a sumar.",
    linkedin: "https://www.linkedin.com/in/alejandrocastilloramos/",
    imagen: "/foto-alex.png",
  },
  {
    nombre: "Esteban Fernández González",
    puesto: "Desarrollador Backend",
    empresa: "UpMarket",
    empresaUrl: "https://upmarket.cloud/es",
    frase: "Entre líneas de código y errores 404, sigo encontrando la forma de avanzar.",
    linkedin: "https://www.linkedin.com/in/estebanfernandezgonzalez/",
    imagen: "/foto-esteban.png",
  },
  {
    nombre: "Carlos Barba Herrador",
    puesto: "Desarrollador Frontend",
    empresa: "nazaríes intelligenia",
    empresaUrl: "https://www.nazaries.com/es",
    frase: "Mi talento favorito: convertir caos en ideas útiles (y con estilo).",
    linkedin: "https://www.linkedin.com/in/cbh01/",
    imagen: "/foto-carlos.png",
  },
  {
    nombre: "Pau Ros Moleón",
    puesto: "Desarrollador Fullstack",
    empresa: "Megasur",
    empresaUrl: "https://www.megasur.es/",
    frase: "Soy de los que preguntan, prueban, fallan… y al final, lo logran.",
    linkedin: "https://www.linkedin.com/in/paurosmoleon/",
    imagen: "/foto-pau.png",
  },
];

const ProfilesGrid = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-100">
      {profiles.map((profile, index) => (
        <AnimatedContent
          key={profile.nombre}
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={index * 0.2}
        >
          <div className="m-10 w-60">
            <div className="rounded-lg border bg-white px-5 pt-8 pb-10 shadow-lg">
              <div className="relative mx-auto pb-2 w-36 rounded-full">
                <img
                  className="mx-auto h-auto w-full rounded-full"
                  src={profile.imagen}
                  alt={profile.nombre}
                />
              </div>
              <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
                {profile.nombre.split(" ").slice(0, -2).join(" ")} <br />
                {profile.nombre.split(" ").slice(-2).join(" ")}
              </h1>
              <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
                {profile.puesto} en
                <br />
                <a
                  target='_blank'
                  className="text-[#1C64F2] transition-all duration-400 hover:text-[#6595F6]"
                  href={profile.empresaUrl}
                >
                  {profile.empresa}
                </a>
              </h3>
              <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
                "{profile.frase}"
              </p>
              <a target='_blank' href={profile.linkedin}>
                <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default ProfilesGrid;
