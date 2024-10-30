import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Serivices from "./components/Services/Serivices";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Serivices />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
