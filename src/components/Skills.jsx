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
  { icon: <FaReact />, name: "React", level: 90 },
  { icon: <FaJs />, name: "JavaScript", level: 85 },
  { icon: <FaHtml5 />, name: "HTML5", level: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", level: 90 },
  { icon: <FaGitAlt />, name: "Git", level: 80 },
  { icon: <FaGithub />, name: "GitHub", level: 85 },
  { icon: <FaNetworkWired />, name: "Réseaux", level: 88 },
  { icon: <FaPalette />, name: "Illustrator & Photoshop", level: 82 },
];

function Skills() {
  return (
    <section
  id="skills"
  className="bg-slate-900 py-28 border-t border-slate-800"
>
      <div className="max-w-7xl mx-auto px-8">

        {/* 1. Marge EN BAS du titre (mb-16) pour décaler les cartes vers le bas */}
        <h2 className="text-center text-5xl font-bold text-purple-400 mb-16">
          Mes compétences
        </h2>

        {/* 2. La grille de cartes */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-purple-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-purple-300 font-bold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-500 to-fuchsia-500 h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Skills;