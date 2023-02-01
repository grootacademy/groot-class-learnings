import './App.css';
import { useSelector } from 'react-redux';
import Two from './components/Two';
import WithApi from './components/WithApi';

function App() {

  const data = useSelector(e => e)

  console.log("this: ", data)

  return (
    <>

      {/* num in One {data?.reducer?.payload?.num} */}
      <br />

      {data.reducer.num}

      <Two />

      <br />
      <br />

      app(data) -  two - one(button)

      <WithApi />
    </>
  );
}

export default App;
