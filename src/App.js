import "./App.css";
import { About } from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./pages/header/Header";
import LandingPage from "./pages/landing/LandingPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import toparrow from "./assests/top_arrow.png";

function App() {
  return (
    <>
      <div className="scrolltop">
        <a href="#home">
          <img src={toparrow} alt="" width="40px" />
        </a>
      </div>
      <Header />
      <LandingPage />
      <About />
      <Portfolio />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
