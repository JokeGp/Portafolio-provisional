import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import image1 from '../assets/images/Me-carrier/image1.jpeg';
import image2 from '../assets/images/Me-carrier/image-2.jpeg';
import image3 from '../assets/images/Me-carrier/imege-3.jpeg';

const images = [
    image1,
    image2,
    image3
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Cambia cada 4 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 right-0 bottom-0 left-auto w-auto min-w-[300px] hidden lg:block bg-gray-900" style={{ left: 'calc(min(100%, 1152px) + 1rem)' }}>
            <div className="relative w-full h-full overflow-hidden">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/20 to-gray-900 z-10 pointer-events-none" />

                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Portfolio image ${currentIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>

                {/* Dots indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75 w-2'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
