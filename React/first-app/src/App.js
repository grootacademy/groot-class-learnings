import './App.css';
import Card from './Card';
import Navbar from './Navbar';

function App() {

  return (
    <>

      <Navbar />

      <div className="d-flex">

        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    </>
  )

}


export default App;