import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import MouseGlow from "./components/MouseGlow";
/*import WhyMe from "./components/WhyMe";*/

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Loader loading={loading} />

      {!loading && (
        <>
    <main>
          <MouseGlow />
      <Navbar />

      <Hero />
    
      <About />
      <div className="h-24 bg-slate-950" />
      <Stats />
      <div className="h-24 bg-slate-950" />
      {/*<WhyMe />
      <div className="h-24 bg-slate-950" />
*/}
      <Skills />
      <div className="h-20" />
      <Timeline />
      <div className="h-20" />
      <Projects />
      <div className="h-24 bg-slate-950" />
      <Services />
      <div className="h-20" />
      <Contact />
      <div className="h-20" />
    </main>
      
      <Footer />
       </>
      )}
    </>
  );
}


export default App;