import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Time Management Intelligence Platform",
        company: "Forentec",
        description: "Desarrollo de lógica UI y mejoras del sistema para un módulo activo relacionado con el gobierno. Despliegue de producción con uso profesional.",
        tech: ["JavaScript", "CSS", "HTML"],
        image: "/src/assets/images/Proyects-Carrier/Time managment.png",
        link: "https://forentec.com.mx/time"
    },
    {
        id: 2,
        title: "ICare Pediatric Monitoring Website",
        company: "Universidad de Colima",
        description: "Refactorización de UI y modernización usando Bootstrap. Parte de un sistema de monitoreo de dolor IoT para niños en hospitales. Mejoras significativas en usabilidad y rendimiento.",
        tech: ["Bootstrap", "JavaScript", "UI/UX"],
        image: "/src/assets/images/Proyects-Carrier/Icare-image.png",
        link: "https://www.infancycare.com/web/"
    },
    {
        id: 3,
        title: "E-commerce Platform",
        company: "Touch of Tech",
        description: "Desarrollo de componentes web profesionales y prácticos usando React, herramientas de API y Redux.",
        tech: ["React", "Redux", "API"],
        image: "/src/assets/images/Proyects-Carrier/project3.png", // Reemplaza con tu imagen
        link: "#"
    }
];

const Projects = () => {
    return (
        <section className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                >
                    Proyectos Destacados
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all overflow-hidden group"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-gray-700/30 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500"><span>Agrega tu captura aquí</span></div>';
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-purple-300 text-sm mb-3">{project.company}</p>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Ver proyecto
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
};

export default Projects;
