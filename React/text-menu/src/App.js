import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextMenu from './components/TextMenu';
import { Routes, Route } from 'react-router';
import Loop from './components/Loop';
import Backend from './components/Backend';
import Calculator from './components/Calculator';
import ImagePreview from './components/ImagePreview';
import Filters from './components/Filters';
import MySlider from './components/MySlider';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("default message");

  const [mode, setMode] = useState("light");

  function foralert() {

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);

  }

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      {showAlert && <Alert message={message} />}

      <Routes>
        <Route path='/' element={<TextMenu foralert={foralert} setMessage={setMessage} mode={mode} />} />
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/loop' element={<Loop />} />
        <Route path='/backend' element={<Backend />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/imagePreview' element={<ImagePreview />} />
        <Route path='/mySlider' element={<MySlider />} />
      </Routes>

      {/* <Filters/> */}

    </>

  );
}

export default App;
