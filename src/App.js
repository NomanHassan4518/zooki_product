import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Clients from "./Components/Clients";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import ExtraLinks from "./Components/ExtraLinks";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <Features />
      </div>

      <div>
        <Pricing />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <Blog />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <ExtraLinks />
      </div>

      <div>
        <Footer />
      </div>

    
    </div>
  );
}

export default App;
