import './App.css';
import { useSelector } from 'react-redux';
import Two from './components/Two';

function App() {

  const data = useSelector(e => e)

  console.log("this: ", data)

  return (
    <>

      {/* num in One {data?.reducer?.payload?.num} */}
      <br />

      {JSON.stringify(data)}

      <Two />

      <br />
      <br />

      app(data) -  two - one(button)

      {/* <WithApi /> */}
    </>
  );
}

export default App;
