import './App.css';
import ImagePreview from './components/ImagePreview';
import ImageEditor from './components/ImageEditor';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {

  const [selectedImage, setSelectedImage] = useState("")

  return (
    <>

      {/* {condition ? true : false} */}

      {selectedImage === "" ?
        <ImagePreview setSelectedImage={setSelectedImage} />
        : <ImageEditor selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
            
      <ToastContainer />


    </>
  );
}

export default App;
