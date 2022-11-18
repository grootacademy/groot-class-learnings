import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextMenu from './components/TextMenu';
import { Routes, Route } from 'react-router';

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
      <Navbar mode={mode}  setMode={setMode}/>
      {showAlert && <Alert message={message} />}

      <Routes>
        <Route path='/' element={<TextMenu foralert={foralert} setMessage={setMessage} mode={mode} />}/>
        <Route path='/about' element={ <About mode={mode} />} />
      </Routes>

    </>

  );
}

export default App;
