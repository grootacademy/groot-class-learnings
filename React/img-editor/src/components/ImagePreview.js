import React from 'react'
import { useState } from 'react';

function ImagePreview(props) {

  const [image, setImage] = useState([]);
  const [first, setFirst] = useState(1);

  function handleImage(e) {
    let arr = image;
    arr.push(URL.createObjectURL(e.target.files[0]));
    setImage(arr);
    setFirst(first + 1);
  }

  return (
    <>
      <h3 className='text-center'>Preview</h3>
      <input type="file" className='imgLable' id='imgId' onChange={handleImage} /><br />

      {image.length !== 0 &&
        <div>
          <hr />
          <div className='d-flex flex-wrap'>

            {image.map((e, i) => (

              <div key={i} onClick={() => props.setSelectedImage(e)} className='d-flex justify-content-center shadow-lg p-4 imgPreview'>
                <img src={e} height="200px" alt="" />
              </div>

            ))}
          </div>

        </div>
      }

    </>
  )
}

export default ImagePreview;