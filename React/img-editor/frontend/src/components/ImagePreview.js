import React from 'react'
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../config';
import { addImageAction, deleteImageAction, getAllImagesAction, } from '../redux/actions/image.Action';
import { notify } from '../utils/toast';
import Spinner from './Spinner';

function ImagePreview(props) {

  const { allStates } = useSelector(e => e)
  const images = allStates.allImages
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isloading, setIsloading] = useState(false)

  // Function to add an image.
  async function handleImage(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      dispatch(addImageAction(reader.result))
    };
  }

  // Function to delete an image.
  const forDeleteImage = (i, e, id) => {
    e.stopPropagation();
    dispatch(deleteImageAction(id))
  }

  // Function to logout
  const logoutBtn = () => {
    localStorage.removeItem("my-image-editor")
    navigate("/login")
    notify("Logged out successfully", toast.TYPE.SUCCESS)
  }

  // useEffect for first mount of component.
  useEffect(() => {
    setIsloading(true)
    dispatch(getAllImagesAction())
  }, [])

  // useEffect to get all images after adding and deleting image
  useEffect(() => {

    if (allStates.processStatus === "pending") {
      setIsloading(true)
    }

    if (allStates.processStatus === "success") {
      dispatch(getAllImagesAction())
    }
    
    if (allStates.processStatus === "") {
      setIsloading(false)
    }

  }, [allStates])

  return (
    <>


      <div className='d-flex justify-content-end'>
        <button className='btn btn-info m-3 shadow' onClick={logoutBtn}><img height="25px" src="/images/icons/icons8-logout-rounded-left-60.png" alt="" />Logout</button>
      </div>

      <h2 className='text-center mt-3 heading' style={{ fontFamily: "'Monoton', cursive" }}>Preview</h2>
      <input type="file" className='imgLable' id='imgId' onChange={handleImage} /><br />
      <hr />

      {isloading ? <Spinner message="Loading images..." /> : <div> {images?.length !== 0 &&
        <div>
          <div className='d-flex flex-wrap'>
            {images?.map((e, i) => (

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