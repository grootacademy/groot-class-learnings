// src/App.js
import React from 'react';
import SpringCarousel from './SpringCarousel';

const Carousal = () => {
    const images = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/500',
    ];

    return (
        <div className="App">
            <h1>Spring Carousel</h1>
            <SpringCarousel images={images} />
        </div>
    );
};

export default Carousal;
