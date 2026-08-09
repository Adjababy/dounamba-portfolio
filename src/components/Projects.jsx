import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Personnel",
  description:
    "Portfolio moderne développé avec React, Vite et Tailwind CSS pour présenter mon parcours, mes compétences et mes réalisations.",
  image: "/projects/portfolio.png",
  imagePosition: "object-left",
  tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Adjababy/react-portefolio",
    demo: "https://adjababy.github.io/react-portefolio/",
  },

 {
  title: "Travel Explore",
  description:
    "Application web permettant de découvrir des destinations de voyage à travers une interface moderne et responsive.",
  image: "/projects/travel.jpeg",
  imagePosition: "object-top",
  tech: ["React", "CSS"],
  github: "https://github.com/Adjababy/travel-explore",
  demo: "https://adjababy.github.io/travel-explore/#/",
},

  {
  title: "Design Graphique",
  description:
    "Création de logos, affiches, flyers et visuels pour les réseaux sociaux avec Adobe Illustrator et Photoshop.",
  image: "/projects/design.png",
  imagePosition: "object-[center_30%]",
  tech: ["Illustrator", "Photoshop"],
  github: "#",
  demo: "#",
},

  {
    title: "Le Journal de Dounamba",
    description:
      "Blog personnel avec CMS headless (Contentful), système de commentaires et interface animée. Articles sur mon apprentissage en développement web.",
    image: "/projects/blog-app.jpeg",
    imagePosition: "object-[center_10%]",
    tech: ["React", "Contentful", "Giscus"],
    github: "https://github.com/Adjababy/a-blog-app",
    demo: "https://adjababy.github.io/a-blog-app/",
  },
];

function Projects() {
  return (
    <section
  id="projects"
  className="bg-slate-900 py-28 border-t border-slate-800"
>
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-purple-400 mb-4">
          Mes projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Une sélection de projets illustrant mes compétences en développement web et en design graphique.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-300"
            >
              <img
  src={project.image}
  alt={project.title}
  className={`w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110 ${
    project.imagePosition ?? "object-center"
  }`}
/>
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-gradient-to-r from-purple-500 to-fuchsia-500 px-3 py-1 rounded-full text-sm font-medium shadow-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
  {project.github !== "#" && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl transition-all duration-300"
    >
      <FaGithub />
      GitHub
    </a>
  )}

  {project.demo !== "#" && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 bg-purple-600 px-4 py-3 rounded-lg hover:bg-purple-700 transition"
    >
      <FaExternalLinkAlt />
      Demo
    </a>
  )}
</div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;