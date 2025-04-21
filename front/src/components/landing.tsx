import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center">
      <div className="flex flex-col items-center px-4">
        <div className="flex justify-center items-center">
          <img src="/whale-no-background.png" alt="logo" className="h-[500px]" />
        </div>

        <section className="flex flex-wrap justify-center items-center gap-4 p-8 text-gray-500">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-[300px]">
            <h2 className="text-2xl mb-2">Característica 1</h2>
            <p>Pau es yo</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-[300px]">
            <h2 className="text-2xl mb-2">Característica 2</h2>
            <p>Pau es MUY yo</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex-1 max-w-[300px]">
            <h2 className="text-2xl mb-2">Característica 3</h2>
            <p>Pau es tan yo que le habla a las cartas del poker</p>
          </div>
        </section>
          <div className="flex justify-center gap-4 mb-6">
            <Link
              to="/home"
              className="bg-white text-purple-700 px-6 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Get started →
            </Link>
          </div>

      </div>
    </main>
  );
}
