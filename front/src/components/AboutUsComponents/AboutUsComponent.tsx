const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 px-15 py-10 border border-gray-900">
        {/* Left column */}
        <div className="lg:w-1/2 space-y-6 ">
          <h2 className="text-3xl font-bold">Sobre nosotros</h2>
          <p className="text-sm text-gray-700 font-normal">
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
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
