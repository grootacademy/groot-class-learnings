import ImagePreview from './components/ImagePreview';
import ImageEditor from './components/ImageEditor';
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner';
import './App.css';

function App() {

  const [selectedImage, setSelectedImage] = useState("")

  const [loadingFlag, setLoadingFlag] = useState(true)

  useEffect(() => {
    return () => {
      setLoadingFlag(false)
    }
  }, [])

  return (
    <>
      {/* {condition ? true : false} */}

      {loadingFlag ? <Spinner /> :

        <Routes>

          <Route path='/' element={
            selectedImage === "" ?
              <ImagePreview setSelectedImage={setSelectedImage} />
              : <ImageEditor selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
          } />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

        </Routes>
      }
      <ToastContainer />
    </>
  );
}

export default App;
