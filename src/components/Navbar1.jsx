const Navbar1 = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
          Logo
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-700"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-700"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-700"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
