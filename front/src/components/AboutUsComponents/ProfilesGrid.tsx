import LinkedIn from '../../assets/icons/LinkedIn';
// Hacer responsive y tamaño de las fotos todas iguales
const ProfilesGrid = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="m-10 max-w-1/3">
        <div className="rounded-lg border bg-white px-2 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Alejandro Castillo Ramos"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Alejandro Castillo Ramos
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Frontend en
            <br />
            <a href="https://www.acuabit.com/">Acuabit</a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Poned lo que sea"
          </p>
          <a href="https://www.linkedin.com/in/alejandrocastilloramos/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="m-10 max-w-1/3">
        <div className="rounded-lg border bg-white px-2 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Esteban Fernández González"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Esteban Fernández González
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Backend en
            <br />
            <a href="https://upmarket.cloud/es">UpMarket</a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Poned lo que sea"
          </p>
          <a href="https://www.linkedin.com/in/estebanfernandezgonzalez/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="m-10 max-w-1/3">
        <div className="rounded-lg border bg-white px-2 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Carlos Barba Herrador"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Carlos Barba Herrador
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Backend en
            <br />
            <a href="https://www.nazaries.com/es">nazaríes intelligenia</a>
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 italic">
            "Poned lo que sea"
          </p>
          <a href="https://www.linkedin.com/in/cbh01/">
            <LinkedIn className="mx-auto mt-4 h-6 w-6 cursor-pointer" />
          </a>
        </div>
      </div>{' '}
      <div className="m-10 max-w-1/3">
        <div className="rounded-lg border bg-white px-2 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://placehold.co/400x400"
              alt="Pau Ros Moleón"
            />
          </div>
          <h1 className="my-4 text-center text-xl font-bold leading-8 text-gray-900">
            Pau Ros Moleón
          </h1>
          <h3 className="my-2 mb-4 font-lg text-semibold text-center leading-6 text-gray-600">
            Desarrollador Fullstack en
            <br />
            <a href="https://www.megasur.es/">Megasur</a>
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
