import React from 'react'
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../config';
import Spinner from './Spinner';


function ImagePreview(props) {

  const userId = JSON.parse(localStorage.getItem("my-image-editor"))?._id

  const [images, setImage] = useState([]);
  const [first, setFirst] = useState(1);
  const [isloading, setIsloading] = useState(true)

  const navigate = useNavigate()

  // Function to add an image to "images" Array and sessionStorage.
  async function handleImage(e) {
    let arr = images;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      sendImageToBackend(reader.result)
    };

  }

  const sendImageToBackend = (binary) => {

    fetch(`${baseUrl}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        title: "image",
        image: binary
      })

    })
      .then(response => response.json())
      .then(data => {
        notify("Image uploaded successfully")
        console.log(data)
        setImage(images.concat(data))
      })
      .catch(err => {
        notifyErr("Something went wrong");
        console.log(err)
      })
  }

  const getImageFromBackend = () => {

    fetch(`${baseUrl}/images/${userId}`)
      .then(response => response.json())
      .then(data => {
        setImage(data)
        setIsloading(false)
      })
      .catch(err => {
        notifyErr("Get images failed went wrong");
        console.log(err)
      })
  }

  // Funtion to delete image from sessionStorage.
  const forDeleteImage = (i, e, id) => {
    e.stopPropagation();
    let arr = images
    arr.splice(i, 1);
    setImage(arr)

    console.log(arr)

    fetch(`${baseUrl}/images`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        id: id,
      })
    })
      .then(response => response.json())
      .then(data => {
        notify("Image deleted successfully")
        console.log(data)
        setFirst(first + 1);

      })
      .catch(err => {
        notifyErr("Image not deleted");
        console.log(err)
      })

  }

  const logoutBtn = () => {
    localStorage.removeItem("my-image-editor")
    navigate("/login")
    notify("Logged out successfully")
  }

  const notify = (message) => toast(message, { containerId: 'TOP_RIGHT', autoClose: 5000, type: toast.TYPE.SUCCESS });;
  const notifyErr = (message) => toast(message, { containerId: 'TOP_RIGHT', autoClose: 5000, type: toast.TYPE.ERROR });;

  // useEffect for first mount of component.
  useEffect(() => {
    if (localStorage.getItem("imagesArray")) {
      let sessionArray = JSON.parse(localStorage.getItem("imagesArray"));
      setImage(sessionArray);
    }
  }, [])


  // useEffect when "first" state updates.
  // useEffect(() => {
  //   if (localStorage.getItem("imagesArray")) {
  //     let sessionArray = JSON.parse(localStorage.getItem("imagesArray"));
  //     setImage(sessionArray);
  //   }
  // }, [first])

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("my-image-editor"));
    if (data?._id) {
      getImageFromBackend()
    } else {
      navigate("/login")
    }

  }, [])




  return (
    <>

      <div className='d-flex justify-content-end'>
        <button className='btn btn-info m-3 shadow' onClick={logoutBtn}><img height="25px" src="/images/icons/icons8-logout-rounded-left-60.png" alt="" />Logout</button>
      </div>

      <h2 className='text-center mt-3 heading' style={{ fontFamily: "'Monoton', cursive" }}>Preview</h2>
      <input type="file" className='imgLable' id='imgId' onChange={handleImage} /><br />
      <hr />

      {isloading ? <Spinner message="Loading images..." /> : <div> {images.length !== 0 &&
        <div>
          <div className='d-flex flex-wrap'>
            {images.map((e, i) => (

              <div key={i} onClick={() => props.setSelectedImage(e.image)} title="Open image in editor" className='d-flex justify-content-center shadow-lg p-4 imgPreview'>
                <img src={e.image} height="200px" alt="" />
                <div className='deleteIcon ' onClick={(k) => forDeleteImage(i, k, e._id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
              </div>

            ))}
          </div>
        </div>
      }</div>}

    </>
  )
}

export default ImagePreview;