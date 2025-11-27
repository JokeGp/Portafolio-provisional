import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Forentec",
        period: "Jul 2024 - Presente",
        description: [
            "Desarrollo y mantenimiento de un sistema de gestión de evidencia digital usando JavaScript y ElectronJS.",
            "Creación de dashboards en Power BI para análisis gubernamentales.",
            "Contribución a un sistema inteligente de clasificación de riesgos en correos electrónicos.",
            "Pruebas unitarias y escaneo de red para validaciones de seguridad.",
            "Presentación de E-radar en la feria de ciberseguridad Vulcan."
        ]
    },
    {
        id: 2,
        role: "Front-End Developer Intern",
        company: "Touch of Tech",
        period: "Ene 2024 - Jun 2024",
        description: [
            "Desarrollo de un proyecto de e-commerce utilizando React y Redux.",
            "Colaboración utilizando Git y prácticas Ágiles.",
            "Desarrollo de componentes web profesionales usando React, herramientas de API y Redux."
        ]
    },
    {
        id: 3,
        role: "Software Developer",
        company: "ICare",
        period: "Ene 2023 - Dic 2023",
        description: [
            "Solución IoT para monitoreo pediátrico usando Arduino.",
            "Modernización del sitio web oficial de Infancy Care (ICare) utilizando Bootstrap."
        ]
    },
    {
        id: 4,
        role: "Software Developer",
        company: "Smart Paludarium",
        period: "Sep 2022 - Nov 2022",
        description: [
            "Pruebas, documentación y soporte de reingeniería para el código del proyecto Smart Paludarium."
        ]
    }
];

const Experience = () => {
    return (
        <section className="py-20 px-8 bg-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                >
                    Experiencia Profesional
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-purple-400" />
                                        {exp.role}
                                    </h3>
                                    <p className="text-purple-300 font-medium">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 text-sm">
                                    <Calendar size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
