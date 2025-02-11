import "./App.css";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import Contact from "./components/Contact";
import Navbar2 from "./components/Navbar2";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section dengan background image */}
      <div className="background-image min-h-screen">
        <Navbar2 />
        <div className="card-container">
          <CardContainer />
        </div>
      </div>

      {/* Section dengan background hitam */}
      <div className="bg-black min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <section id="about" className="mb-12 md:mb-20">
            {/* Isi konten about */}
            <About />
          </section>

          <section id="services" className="mb-12 md:mb-20">
            {/* Isi konten services */}
            <Services />
          </section>

          <section id="contact" className="mb-12 md:mb-20">
            {/* Isi konten contact */}
            <Contact />
          </section>
        </div>

        <footer className="bg-gray-900 text-white py-6 md:py-8 mt-auto">
          <div className="container mx-auto text-center pixel-font text-xs md:text-sm px-4">
            <p>© 2025 Etherian. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
