import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Réseaux", level: 88 },
  { name: "GitHub", level: 85 },
  { name: "Illustrator & Photoshop", level: 82 },
  { name: "Git", level: 80 },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-28 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-30 rounded-full"></div>
            <img
              src="/profile.PNG"
              alt="Dounamba Traoré"
              className="relative w-96 h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
            />
          </div>
        </motion.div>

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
            React, designer graphique et ingénieure en Réseaux & Télécommunications.
            J'aime créer des applications web modernes, rapides et intuitives
            tout en combinant mes compétences en développement, réseaux et
            design graphique.
          </p>

          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;