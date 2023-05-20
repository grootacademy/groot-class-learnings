import "./App.css";
import { useState } from "react";
import AddPatient from "./components/AddPatient";
import GeneralExamination from "./components/GeneralExamination";
import HusbandDetail from "./components/HusbandDetail";
import Investigations from "./components/Investigations";
import OtherDetails from "./components/OtherDetails";
import PatientDetails from "./components/PatientDetails";
import PatientHistory from "./components/PatientHistory";

function App() {
  const [num, setNum] = useState(1)

  const increaseNum = () => {
    setNum(num + 1)
  }

  const decreaseNum = () => {
    setNum(num - 1)
  }

  return (
    <>
      {num == 1 && <AddPatient increaseNum={increaseNum} />}
      {num == 2 && <PatientHistory increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 3 && <HusbandDetail increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 4 && <GeneralExamination increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 5 && <Investigations increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 6 && <OtherDetails increaseNum={increaseNum} decreaseNum={decreaseNum} />}
      {num == 7 && <PatientDetails decreaseNum={decreaseNum} />}
    </>
  );
}

export default App;
