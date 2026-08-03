import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    date: "2018 - 2023",
    title: "Master Réseaux & Télécommunications",
    place: "Université de Tlemcen",
    description:
      "Formation en réseaux informatiques, télécommunications, administration des systèmes, cybersécurité et technologies des réseaux.",
  },
  {
    icon: <FaAward />,
    date: "2024",
    title: "Certification Développement Web Front-End",
    place: "LEARNIO",
    description:
      "Formation en HTML, CSS, JavaScript, React, Git et développement d'interfaces web modernes et responsives.",
  },
  {
    icon: <FaAward />,
    date: "2025",
    title: "Certification Design Graphique",
    place: "LEARNIO",
    description:
      "Maîtrise d'Adobe Illustrator et Photoshop pour la création de logos, affiches, flyers et supports de communication.",
  },
  {
    icon: <FaBriefcase />,
    date: "2024 & 2026",
    title: "Stagiaire Superviseur Réseau",
    place:"Orange-MALI et Malinova",
    description:
      "Supervision des sites Orange Mali, suivi des incidents techniques, surveillance du réseau 24h/24 et coordination avec les équipes techniques.",
  },
];

function Timeline() {
  return (
    <section id="timeline" className="bg-slate-900 py-28">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-purple-400 mb-20">
          Mon parcours
        </h2>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-1 bg-purple-600 rounded-full"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-8 mb-16"
            >
              <div className="z-10 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl shadow-lg">
                {item.icon}
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full hover:border-purple-500 hover:shadow-purple-500/20 transition-all duration-300">

                <span className="inline-block bg-purple-600 px-3 py-1 rounded-full text-sm mb-3">
                  {item.date}
                </span>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <h4 className="text-purple-400 mt-2 mb-4">
                  {item.place}
                </h4>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Timeline;