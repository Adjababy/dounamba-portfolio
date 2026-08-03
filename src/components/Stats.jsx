import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCode,
  FaCertificate,
  FaSmile,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    number: "4+",
    title: "Projets réalisés",
  },
  {
    icon: <FaCode />,
    number: "8+",
    title: "Technologies",
  },
  {
    icon: <FaCertificate />,
    number: "2",
    title: "Diplômes & Certifications",
  },
  {
    icon: <FaSmile />,
    number: "100%",
    title: "Motivation",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-8 text-center border border-slate-700 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl text-purple-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-white mb-2">
                {item.number}
              </h3>

              <p className="text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;