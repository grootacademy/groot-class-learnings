// src/components/SpringCarousel.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpringCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="spring-carousel">
            <motion.div
                className="carousel-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
            >
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={image} alt={`carousel-item-${index}`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
            <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
        </div>
    );
};

export default SpringCarousel;
