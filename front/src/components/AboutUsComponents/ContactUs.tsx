import FadeContent from '../StyleComponents/FadeContent';

const ContactUsComponent = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Imagen + contacto */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-blue-700 object-cover"
                  />
                  <h1 className=" text-blue-700 font-manrope text-4xl leading-10 absolute top-11 left-11 text-center ">
                    Solicita una demo
                  </h1>
                  <div className="absolute bottom-0 lg:p-11 p-5 flex flex-col w-full">
                    <div className="bg-white rounded-lg p-6 block">
                      <div className="flex items-center mb-6">
                        {/* Teléfono */}
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                            stroke="#1C64F2"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          +34 633 08 13 16
                        </h5>
                      </div>
                      {/* Email */}
                      <a href="mailto:efctpartnership@gmail.com" className="flex items-center">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                            stroke="#1C64F2"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          efctpartnership@gmail.com
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Formulario */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-blue-600 font-manrope text-4xl leading-10 mb-11">
                Envíanos un mensaje
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Nombre"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent  shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Escriba su mensaje aquí..."
              />
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full cursor-pointer transition-all duration-400 hover:bg-[#6595F6] bg-blue-600 shadow-sm">
                Enviar
              </button>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
