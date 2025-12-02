import { motion } from 'framer-motion';
import { Mail, Download, Send } from 'lucide-react';

import cvFile from '../documents/Curriculum_2026.pdf';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                >
                    ¿Listo para trabajar juntos?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mb-12 text-lg"
                >
                    Actualmente estoy disponible para nuevos proyectos.
                    Si tienes una idea o simplemente quieres saludar, ¡contáctame!
                </motion.p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <motion.a
                        href="mailto:quiqueguerrero23@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all border border-white/10"
                    >
                        <Send size={20} className="!text-white" />
                        <span className="!text-white">Contactar Ahora</span>
                    </motion.a>

                    <motion.a
                        href={cvFile}
                        download="Curriculum_Jose_Enrique_Guerrero.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl text-white font-semibold hover:bg-gray-800/50 hover:border-purple-500/30 transition-all"
                    >
                        <Download size={20} />
                        Descargar CV
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 pt-8 border-t border-gray-800 text-gray-500 text-sm"
                >
                    <p>© {new Date().getFullYear()} JokeGp. Todos los derechos reservados.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
