import React from 'react'
import { useState, useEffect } from 'react';

function ImagePreview(props) {

  const [images, setImage] = useState([]);
  const [first, setFirst] = useState(1);


  // Function to add an image to "images" Array and sessionStorage.
  function handleImage(e) {
    let arr = images;
    arr.push(URL.createObjectURL(e.target.files[0]));
    setImage(arr);
    setFirst(first + 1);

    sessionStorage.setItem("imagesArray", JSON.stringify(arr));
  }


  // Funtion to delete image from sessionStorage.
  const forDeleteImage = (i, e) => {
    e.stopPropagation();

    let sessionArray = JSON.parse(sessionStorage.getItem("imagesArray"));
    sessionArray.splice(i, 1);
    sessionStorage.setItem("imagesArray", JSON.stringify(sessionArray));
    setFirst(first + 1);
  }


  // useEffect for first mount of component.
  useEffect(() => {
    if (sessionStorage.getItem("imagesArray")) {
      let sessionArray = JSON.parse(sessionStorage.getItem("imagesArray"));
      setImage(sessionArray);
    }
  }, [])


  // useEffect when "first" state updates.
  useEffect(() => {
    if (sessionStorage.getItem("imagesArray")) {
      let sessionArray = JSON.parse(sessionStorage.getItem("imagesArray"));
      setImage(sessionArray);
    }
  }, [first])


  return (
    <>
      <h3 className='text-center'>Preview</h3>
      <input type="file" className='imgLable' id='imgId' onChange={handleImage} /><br />

      {images.length !== 0 &&
        <div>
          <hr />
          <div className='d-flex flex-wrap'>
            {images.map((e, i) => (

              <div key={i} onClick={() => props.setSelectedImage(e)} className='d-flex justify-content-center shadow-lg p-4 imgPreview'>
                <img src={e} height="200px" alt="" />
                <div className='deleteIcon ' onClick={(e) => forDeleteImage(i, e)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      }

    </>
  )
}

export default ImagePreview;