import React, { useState } from 'react'

function MySlider() {

    const images = [
        "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000",
        "https://i.pinimg.com/736x/b3/45/e4/b345e46becdaeaaa9dcf6ea6144c91a9.jpg",
        "https://p4.wallpaperbetter.com/wallpaper/384/616/915/vaporwave-minimalism-forest-wallpaper-preview.jpg",
        "https://w0.peakpx.com/wallpaper/841/703/HD-wallpaper-lighthouse-in-mountain-background-vaporwave.jpg"
    ]

    const [index, setIndex] = useState(0)
    // const [currentImage, setCurrentImage] = useState(images[index])

    function changeImage(dir) {
        if (dir === "L") {
            setIndex(index - 1)
            // setCurrentImage(images[index - 1])
        }
        if (dir === "R") {
            setIndex(index + 1)
            // setCurrentImage(images[index + 1])
        }
    }

    return (
        <div>

            <img src={images[index]} alt="image" height="300" />
            <br />
            <div className='d-flex'>

                {images.map(e => (
                    <div> o </div>
                ))}
            </div>
            <button onClick={() => changeImage("L")}>L</button>
            <button onClick={() => changeImage("R")}>R</button>

        </div>
    )
}

export default MySlider