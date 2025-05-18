const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-8 py-10">
      {/* Left column */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-sm text-gray-700">
          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
          Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. 
          Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. 
          Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>

        {/* Contact form */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact us:</h3>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-xs text-gray-600">First name</label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-xs text-gray-600">Last name</label>
              <input
                type="text"
                placeholder="Smitherton"
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600">Email address</label>
            <input
              type="email"
              placeholder="email@janesfakedomain.net"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600">Your message</label>
            <textarea
              placeholder="Enter your question or message"
              className="w-full border border-gray-300 rounded px-2 py-2 text-sm h-24 resize-none"
            ></textarea>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="bg-black w-full h-[400px] rounded-lg flex items-center justify-center text-white text-sm">
          Foto de los 4
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
