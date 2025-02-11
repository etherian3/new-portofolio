import { useEffect, useRef, useState } from "react";
import { MenuIcon, X, Home } from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  const toggleDraw = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Home Logo - Desktop Only */}
            <div className="hidden md:flex items-center">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Home className="h-6 w-6" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white pixel-font text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDraw}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <MenuIcon className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-start z-50">
          <div
            ref={drawerRef}
            className="bg-gray-900/95 backdrop-blur-md w-64 h-full shadow-lg transform transition-transform duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-white pixel-font text-lg">Menu</h2>
                <button
                  onClick={toggleDraw}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {/* Home Link for Mobile */}
                <a
                  href="#"
                  onClick={toggleDraw}
                  className="block py-2.5 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg pixel-font text-sm transition-all duration-200"
                >
                  Home
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={toggleDraw}
                    className="block py-2.5 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg pixel-font text-sm transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar2;
