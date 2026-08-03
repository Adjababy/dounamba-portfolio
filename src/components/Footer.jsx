import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h3 className="text-3xl font-bold text-white">
Dounamba Traoré
</h3>

<p className="mt-3 text-gray-400">
Développeuse Front-End React • Ingénieure Réseaux & Télécommunications
</p>

<p className="mt-2 text-gray-500">
Bamako • Mali
</p>
        </div>

        <div className="flex gap-6 my-6 md:my-0">

          <a
            href="https://github.com/Adjababy"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={28}
              className="hover:text-purple-400 transition"
            />
          </a>

          <a
            href="https://linkedin.com/in/adja-traore-472444258"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={28}
              className="hover:text-purple-400 transition"
            />
          </a>

        </div>

        <a
          href="#home"
          className="bg-purple-600 p-3 rounded-full hover:bg-purple-700"
        >
          <FaArrowUp className="text-white" />
        </a>

      </div>

      <p className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Dounamba Traoré • Conçu avec React, Vite et Tailwind CSS — Tous droits réservés.
      </p>

    </footer>
  );
}

export default Footer;