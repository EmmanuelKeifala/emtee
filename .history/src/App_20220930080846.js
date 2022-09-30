import "./App.css";
import NavBar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GoogleAd from "./Components/GoogleAd";
function App() {
  return (
    <div className="App">
      <NavBar />
      <GoogleAd />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
