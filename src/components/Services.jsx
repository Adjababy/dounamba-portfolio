import { motion } from "framer-motion";
import {
  FaCode,
  FaNetworkWired,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Développement Front-End",
    description:
      "Création d'applications web modernes, rapides et responsives avec React, JavaScript et Tailwind CSS.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Réseaux & Télécommunications",
    description:
      "Supervision réseau, gestion des incidents, administration et optimisation des infrastructures réseau.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design Graphique",
    description:
      "Création de logos, affiches, flyers et visuels professionnels avec Adobe Illustrator et Photoshop.",
  },
];

function Services() {
  return (
    <section
  id="services"
  className="bg-slate-900 py-28 border-t border-slate-800"
>
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-purple-400 mb-4">
          Mes services
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Des compétences complémentaires pour répondre à différents besoins numériques.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-purple-500/20 transition duration-300"
            >
              <div className="text-5xl text-purple-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;