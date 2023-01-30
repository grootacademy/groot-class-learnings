import './App.css';
import { useSelector } from 'react-redux';
import One from './components/One';
import Two from './components/Two';

function App() {

  const data = useSelector(e => e)

  return (
    <>

      num in One {data.reducer}

      <br />

      <Two />

      <br />
      <br />

      app(data) - two - one(button)
    </>
  );
}

export default App;
