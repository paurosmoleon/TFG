import { Link, useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-blue-500">Error 404</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            No podemos encontrar la página que buscas
          </h1>
          <p className="mt-4 text-gray-500">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <span>Volver</span>
            </button>

            <Link
              to="/home"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 cursor-pointer flex items-center justify-center"
            >
              Ir a inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
