import { useState } from "react";
import "./App.css";
import AddPaitient from "./components/AddPaitient";
import GeneralExamination from "./components/GeneralExamination";
import HusbandDetail from "./components/HusbandDetail";
import Investigations from "./components/Investigations";
import OtherDetails from "./components/OtherDetails";
import PatientHistory from "./components/PatientHistory";

function App() {
  const [num, setNum] = useState(4)
  const [personalDetail, setPersonalDetail] = useState({})

  const increaseNum = () => {
    setNum(num + 1)
  }

  const decreaseNum = () => {
    setNum(num - 1)
  }

  return (
    <>

      {num == 1 && <AddPaitient increaseNum={increaseNum} setPersonalDetail={setPersonalDetail}/>}
      {num == 2 && <PatientHistory increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 3 && <HusbandDetail increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 4 && <GeneralExamination increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 5 && <Investigations increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 6 && <OtherDetails decreaseNum={decreaseNum} />}

    </>
  );
}

export default App;
