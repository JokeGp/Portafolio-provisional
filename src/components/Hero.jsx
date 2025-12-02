import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import profilePic from '../assets/images/profile-picture.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-40 h-40 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-lg opacity-75 animate-pulse" />
          <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-blue-500 to-purple-500">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <img src={profilePic} alt="José Enrique Guerrero Pérez" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Hola, soy José Enrique Guerrero Pérez
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Ingeniero de Software y desarrollador.
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Ingeniero de Software con experiencia en desarrollo frontend, implementación de UI, visualización de datos y ciberseguridad.
          He contribuido a sistemas de nivel de producción para iniciativas gubernamentales y de salud utilizando React, JavaScript, ElectronJS y Power BI.
        </p>

        <div className="flex gap-6 justify-center">
          {[
            { Icon: Github, href: "https://github.com/JokeGp" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/guerrero-perez-jose-enrique-727045206/" },
            { Icon: Mail, href: "mailto:quiqueguerrero23@gmail.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all group"
            >
              <Icon size={24} className="group-hover:text-purple-400 transition-colors" />
            </motion.a>
          ))}
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <span className="text-sm text-gray-500">Desliza para ver más</span>
      </motion.div>
    </section >
  );
};

export default Hero;
