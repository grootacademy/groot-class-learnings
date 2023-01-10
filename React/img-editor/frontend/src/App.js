import './App.css';
import ImagePreview from './components/ImagePreview';
import ImageEditor from './components/ImageEditor';
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [selectedImage, setSelectedImage] = useState("")

  return (
    <>
      {/* {condition ? true : false} */}

      <Routes>

        <Route path='/' element={
          selectedImage === "" ?
            <ImagePreview setSelectedImage={setSelectedImage} />
            : <ImageEditor selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />



      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
