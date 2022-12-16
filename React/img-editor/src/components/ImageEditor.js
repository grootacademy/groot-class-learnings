import React from 'react'

function ImageEditor(props) {

    return (
        <>
            <button className='btn btn-danger m-3' onClick={() => props.setSelectedImage("")}>X</button>
            <h2 className='text-center'>Editor</h2>
            <div className='shadow-lg p-4'>
                <img src={props.selectedImage}  height="500px" alt="" />
            </div>
        </>
    )
}

export default ImageEditor