import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import MouseGlow from "./components/MouseGlow";

function App() {
  return (
    <main>
      <MouseGlow />
      <Navbar />
      <Hero />
      <Projects />
      <div className="h-24 bg-slate-950" />
      <About />
      <div className="h-24 bg-slate-950" />
      <Stats />
      <div className="h-24 bg-slate-950" />
      <Timeline />
      <div className="h-20" />
      <Services />
      <div className="h-20" />
      <Contact />
      <div className="h-20" />
      <Footer />
    </main>
  );
}

export default App;