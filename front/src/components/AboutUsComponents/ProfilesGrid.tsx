import LinkedIn from '../../assets/icons/LinkedIn';
// Hacer responsive y tamaño de las fotos todas iguales
const ProfilesGrid = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      <div className="m-10 w-60">
        <div className="rounded-lg border bg-white px-5 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto pb-2 w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="../../../public/foto-alex.jpg"
              alt="Alejandro Castillo Ramos"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Alejandro <br></br>Castillo Ramos
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Frontend en
            <br />
            <a
              className="text-[#1C64F2] transition-all duration-400 hover:text-[#6595F6]"
              href="https://acuabit.es/"
            >
              Acuabit
            </a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Tal vez no sea el más brillante, pero siempre estoy dispuesto a sumar."
          </p>
          <a href="https://www.linkedin.com/in/alejandrocastilloramos/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="m-10 w-60">
        <div className="rounded-lg border bg-white px-5 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto pb-2 w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Esteban Fernández González"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Esteban <br></br>Fernández González
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Backend en
            <br />
            <a
              className="text-[#1C64F2] transition-all duration-400 hover:text-[#6595F6]"
              href="https://upmarket.cloud/es"
            >
              UpMarket
            </a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Poned lo que sea"
          </p>
          <a href="https://www.linkedin.com/in/estebanfernandezgonzalez/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="m-10 w-60">
        <div className="rounded-lg border bg-white px-5 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto pb-2 w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Carlos Barba Herrador"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Carlos <br></br>Barba Herrador
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Backend en
            <br />
            <a
              className="text-[#1C64F2] transition-all duration-400 hover:text-[#6595F6]"
              href="https://www.nazaries.com/es"
            >
              nazaríes intelligenia
            </a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Poned lo que sea"
          </p>
          <a href="https://www.linkedin.com/in/cbh01/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>{' '}
      <div className="m-10 w-60">
        <div className="rounded-lg border bg-white px-5 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto pb-2 w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Pau Ros Moleón"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Pau <br></br> Ros Moleón
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Fullstack en
            <br />
            <a
              className="text-[#1C64F2] transition-all duration-400 hover:text-[#6595F6]"
              href="https://www.megasur.es/"
            >
              Megasur
            </a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Poned lo que sea"
          </p>
          <a href="https://www.linkedin.com/in/paurosmoleon/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilesGrid;
