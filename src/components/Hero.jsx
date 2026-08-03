import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <p className="text-purple-400 text-xl mb-4">
            👋 Bonjour, je suis
          </p>

          <h1 className="text-6xl font-black text-white leading-tight">
            Dounamba
            <br />
            Traoré
          </h1>

          <h2 className="mt-6 text-3xl text-gray-300">
            Développeuse Front-End React
          </h2>
          

          <h3 className="text-xl text-purple-400 mt-2">
            Ingénieure Réseaux & Télécommunications
          </h3>

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            Passionnée par le développement web moderne,
            je crée des applications performantes,
            élégantes et adaptées aux besoins des entreprises.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="/CV_DOUNAMBA_TRAORE.pdf"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold"
            >
              Télécharger mon CV
            </a>

            <a
              href="#projects"
              className="border border-purple-500 px-8 py-4 rounded-full hover:bg-purple-600"
            >
              Mes projets
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <img
            src="/profile.PNG"
            alt="Dounamba"
            className="w-96 h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;