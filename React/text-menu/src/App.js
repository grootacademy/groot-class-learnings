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
import RotateImage from './components/RotateImage';
import ImageCompressor from './components/ImageCompressor';
import Filters1 from './components/Filters1';
import FormSubmit from './components/FormSubmit';
import InputDoubt from './components/InputDoubt';
import Markdown1 from './components/Markdown';
import Refs from './components/Refs';
import { FunctionInJsx } from "./components/FunctionInJsx"
import RightClick from './components/RightClick';
import ImageShow from './components/ImageShow';
import WillUnmount from './components/WillUnmount';
import ImageError from './components/ImageError';
import SampleUnmount from './components/sampleUnmount/SampleUnmount';
import Carousal from './components/carousal/Carousal';

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from './hooks/useFollowPointer';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("default message");

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const [mode, setMode] = useState("light");

  function foralert() {

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);

  }

  return (
    <>
      {/* <Navbar mode={mode} setMode={setMode} /> */}
      {showAlert && <Alert message={message} />}

      <Routes>
        <Route path='/' element={<TextMenu foralert={foralert} setMessage={setMessage} mode={mode} />} />
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/loop' element={<Loop />} />
        <Route path='/backend' element={<Backend />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/imagePreview' element={<ImagePreview />} />
        <Route path='/mySlider' element={<MySlider />} />
        <Route path='/rotateImage' element={<RotateImage />} />
        <Route path='/imageCompressor' element={<ImageCompressor />} />
        <Route path='/filter' element={<Filters1 />} />
        <Route path='/formSubmit' element={<FormSubmit />} />
        <Route path='/inputDoubt' element={<InputDoubt />} />
        <Route path='/markdown' element={<Markdown1 />} />
        <Route path='/functionInJsx' element={<FunctionInJsx />} />
        <Route path='/refs' element={<Refs />} />
        <Route path='/right' element={<RightClick />} />
        <Route path='/imageshow' element={<ImageShow />} />
        <Route path='/unmount' element={<WillUnmount />} />
        <Route path='/imageError' element={<ImageError />} />
        <Route path='/sampleUnmount' element={<SampleUnmount />} />
        <Route path='/carousal' element={<Carousal />} />
      </Routes>

      <motion.div
        ref={ref}
        className="pointerbox"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
      {/* <Filters/> */}

    </>

  );
}

export default App;
