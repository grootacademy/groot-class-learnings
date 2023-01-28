import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

export default function PreviewInEditor(props) {

    function handleResize(e) {
        document.getElementById("image").style.zoom = e.target.value / 100 + .01
    }

    return (
        <>
            <div style={{ width: "80.5%", height: "300px" }}>

                <div className='d-flex justify-content-end'>
                    <button className='btn btn-danger m-3 shadow' onClick={() => props.props.setSelectedImage("")}>X</button>
                </div>

                <div className='shadow-lg p-4 editImage' id='img-prt'>
                    <img src={props.props.selectedImage} className='rounded shadow-lg' id="image" alt="" />
                </div>

                {/* <div className='shadow-lg p-4 editImage' id='canvas-prt'>
                    <canvas id='canvas1' style={{ display: "none" }}></canvas>

                </div>

                <div className='longRange'>
                    <p> <img src="images/icons/icons8-saturation-48.png" height="25px" alt="" /> Percentage</p>
                    <input type="range" name='percentageSize' defaultValue="50"  />
                </div> */}

                <div className='resizeInput' >

                    <input type="range" onChange={handleResize} defaultValue="100" />
                    <p className='text-center'>Resize image</p>

                </div>
            </div>
        </>
    )
}
