import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaPalette,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaNetworkWired />, name: "Réseaux" },
  { icon: <FaPalette />, name: "Illustrator & Photoshop" },
];

function About() {
  return (
    <section id="about" className="bg-slate-900 py-36 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/profile.PNG"
            alt="Dounamba Traoré"
            className="w-80 rounded-3xl shadow-2xl border border-purple-500"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-purple-400 mb-8">
            À propos
          </h2>

          <p className="text-gray-300 leading-8 text-lg mb-10">
            Je suis <strong>Dounamba Traoré</strong>, développeuse Front-End
            React et ingénieure en Réseaux & Télécommunications. J'aime créer
            des applications web modernes, rapides et intuitives tout en
            combinant mes compétences en développement, réseaux et design
            graphique.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 text-sm text-gray-300 bg-slate-800 px-4 py-2 rounded-full"
              >
                <span className="text-purple-400">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
