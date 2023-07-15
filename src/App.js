import "./App.css";
import { About } from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./pages/header/Header";
import Headsidenav from "./pages/header/Headsidenav";
import LandingPage from "./pages/landing/LandingPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Projects from "./pages/projects/Projects";
import Personalskills from "./pages/skills/Personalskills";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Headsidenav /> */}
      <LandingPage />
      <About />
      {/* <Portfolio /> */}
      {/* <Personalskills /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
