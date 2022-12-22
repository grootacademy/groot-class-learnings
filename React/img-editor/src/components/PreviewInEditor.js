import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PreviewInEditor(props) {
    const notify = () => toast("message", { containerId: 'TOP_RIGHT', autoClose: 5000, type: toast.TYPE.ERROR });;

    return (
        <>
            <div style={{ width: "80.5%" }}>

                <div className='d-flex justify-content-end'>
                    <button className='btn btn-danger m-3 shadow' onClick={() => props.props.setSelectedImage("")}>X</button>
                </div>


                <div className='shadow-lg p-4 editImage'>
                    <img src={props.props.selectedImage} className='rounded shadow-lg' id="image" alt="" />
                </div>

                <button className="btn btn-primary" onClick={notify}>Toast</button>
                <ToastContainer />

            </div>
        </>
    )
}
