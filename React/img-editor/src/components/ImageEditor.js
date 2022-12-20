import { stripBasename } from '@remix-run/router';
import React, { useState } from 'react'

function ImageEditor(props) {

    const [countValues, setCountValues] = useState({
        saturation: null,
        brightness: null,
        grayscale: null,
        hue: null,
        blur: null,
        contrast: null,
        sepia: null,
        invert: false
    });

    function handleEdit(e) {

        let value = (e.target.value / 100 * 3).toFixed(3);
        let element = document.getElementById('image').style;

        if (e.target.name === "saturation") {

            element.filter = `saturate(${value})`;
            setCountValues({ ...countValues, saturation: value });

        } else if (e.target.name === "brightness") {

            element.filter = `brightness(${value})`;
            setCountValues({ ...countValues, brightness: value });

        }
        else if (e.target.name === "grayscale") {

            let value = (e.target.value / 100).toFixed(3);
            element.filter = `grayscale(${value})`;
            setCountValues({ ...countValues, grayscale: value });

        }
        else if (e.target.name === "hue") {

            let value = (e.target.value / 100 * 360).toFixed(0);
            element.filter = `hue-rotate(${value}deg)`;
            setCountValues({ ...countValues, hue: value });

        }
        else if (e.target.name === "blur") {

            let value = (e.target.value / 100 * 10).toFixed(2);
            element.filter = `blur(${value}px)`;
            setCountValues({ ...countValues, blur: value });

        }
        else if (e.target.name === "contrast") {

            let value = (e.target.value / 100 * 3).toFixed(2);
            element.filter = `contrast(${value})`;
            setCountValues({ ...countValues, contrast: value });

        }
        else if (e.target.name === "sepia") {

            let value = (e.target.value / 100).toFixed(2);
            element.filter = `sepia(${value})`;
            setCountValues({ ...countValues, sepia: value });

        }
        else if (e.target.name === "invert") {

            if (countValues.invert) {
                element.filter = `invert(0)`;
                setCountValues({ ...countValues, invert: false });
            } else {
                element.filter = `invert(1)`;
                setCountValues({ ...countValues, invert: true });
            }

        }

    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h2 className='text-center m-3 heading' style={{fontFamily:"'Monoton', cursive"}}>Editor</h2>
                <button className='btn btn-danger m-3 shadow' onClick={() => props.setSelectedImage("")}>X</button>
            </div>

            <hr />
            <div className='d-flex justify-content-center'>
                <div className='btn btn-light mx-3'>
                    <p> <img src="images/icons/icons8-saturation-48.png" height="25px" alt="" /> Saturation</p>
                    <input type="range" name='saturation' defaultValue="33.33" onChange={handleEdit} />
                    <p>{countValues.saturation}</p>
                </div>
                <div className='btn btn-light mx-3'>
                    <p> <img src="images/icons/icons8-sun-48.png" height="25px" alt="" />Brightness</p>
                    <input type="range" name='brightness' defaultValue="33.33" onChange={handleEdit} />
                    <p>{countValues.brightness}</p>
                </div>
                <div className='btn btn-light mx-3'>

                    <p><img src="images/icons/grayscale.png" height="25px" alt="" /> Grayscale</p>
                    <input type="range" name='grayscale' defaultValue="0" onChange={handleEdit} />
                    <p>{countValues.grayscale}</p>
                </div>
                <div className='btn btn-light mx-3'>
                    <p> <img src="images/icons/icons8-color-palette-48.png" height="25px" alt="" /> Hue</p>
                    <input type="range" name='hue' defaultValue="0" onChange={handleEdit} />
                    {countValues.hue && <p>{countValues.hue} deg</p>}
                </div>
                <div className='btn btn-light mx-3'>
                    <p> <img src="images/icons/icons8-blur-48.png" height="25px" alt="" />Blur</p>
                    <input type="range" name='blur' defaultValue="0" onChange={handleEdit} />
                    <p>{countValues.blur} </p>
                </div>
                <div className='btn btn-light mx-3'>
                    <p><img src="images/icons/icons8-contrast-64.png" height="25px" alt="" />Contrast</p>
                    <input type="range" name='contrast' defaultValue="33.33" onChange={handleEdit} />
                    <p>{countValues.contrast} </p>
                </div>
                <div className='btn btn-light mx-3'>
                    <p><img src="images/icons/icons8-old-fashioned-family-photo-48.png" height="25px" alt="" /> Sepia</p>
                    <input type="range" name='sepia' defaultValue="0" onChange={handleEdit} />
                    <p>{countValues.sepia} </p>
                </div>

            </div>

            <hr />

            <div className='shadow-lg p-4 editImage'>
                <img src={props.selectedImage} className='rounded shadow-lg' id="image" alt="" />
            </div>
            <hr />
            <div className='d-flex justify-content-center mt-3'>
                <div className='btn btn-light mx-3'>
                    <img src="images/icons/icons8-invert-selection-48.png" height="25px" alt="" />
                    <input type="button" name='invert' className='btn' value={countValues.invert ? "Off Invert" : "On Invert"} onClick={handleEdit} />
                </div>
            </div>
            <hr />

        </>
    )
}

export default ImageEditor