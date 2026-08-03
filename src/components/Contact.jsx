import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
  id="contact"
  className="bg-slate-900 py-28 border-t border-slate-800"
>
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-purple-400 mb-4"
        >
          Me contacter
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informations */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
              <FaEnvelope className="text-purple-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">
                  dounambatraore@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
              <FaMapMarkerAlt className="text-purple-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Localisation</h4>
                <p className="text-gray-400">
                  Bamako, Mali
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
              <FaGithub className="text-purple-400 text-2xl" />
              <a
                href="https://github.com/Adjababy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400"
              >
                github.com/Adjababy
              </a>
            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
              <FaLinkedin className="text-purple-400 text-2xl" />
              <a
                href="https://linkedin.com/in/adja-traore-472444258"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400"
              >
                LinkedIn
              </a>
            </div>

          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-3xl shadow-xl space-y-5"
          >

            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Votre email"
              className="w-full bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="6"
              placeholder="Votre message"
              className="w-full bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold transition"
            >
              Envoyer le message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;