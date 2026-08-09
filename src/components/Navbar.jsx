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

  const links = [
    { href: "#home", label: "Accueil" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "À propos" },
    { href: "#timeline", label: "Parcours" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

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
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-purple-400">
                {link.label}
              </a>
            </li>
          ))}
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
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;