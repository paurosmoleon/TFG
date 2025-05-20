const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 px-8 py-10">
        {/* Left column */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-sm text-gray-700">
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
          <div className="bg-black w-full h-[400px] rounded-lg flex items-center justify-center text-white text-sm">
            Foto de los 4
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
