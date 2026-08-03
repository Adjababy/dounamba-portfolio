import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaPalette,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Développement Front-End",
    text: "Je développe des interfaces modernes, rapides et responsives avec React, JavaScript et Tailwind CSS.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Réseaux & Télécommunications",
    text: "Grâce à ma formation et à mon expérience, je comprends les infrastructures réseau et leur supervision.",
  },
  {
    icon: <FaPalette />,
    title: "Design Graphique",
    text: "Je conçois des visuels professionnels avec Adobe Illustrator et Photoshop pour valoriser l'identité d'une entreprise.",
  },
];

function WhyMe() {
  return (
    <section className="bg-slate-900 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-purple-400 mb-5">
          Pourquoi me choisir ?
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Je combine des compétences en développement web, réseaux et design
          graphique afin de proposer des solutions modernes, performantes et
          adaptées aux besoins des entreprises.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="text-5xl text-purple-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyMe;