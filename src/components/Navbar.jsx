import { useState, useEffect } from "react";
import { Menu, X } from "react-feather";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <a
          href="#home"
          className="text-3xl font-extrabold text-purple-400"
        >
          Dounamba.
        </a>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-purple-400">Accueil</a></li>
          <li><a href="#about" className="hover:text-purple-400">À propos</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Compétences</a></li>
          <li><a href="#timeline" className="hover:text-purple-400">Parcours</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900 text-white flex flex-col px-8 pb-6 space-y-5">
          <a href="#home" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setOpen(false)}>À propos</a>
          <a href="#skills" onClick={() => setOpen(false)}>Compétences</a>
          <a href="#timeline" onClick={() => setOpen(false)}>Parcours</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;