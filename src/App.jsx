import Header from "./components/Header"
import Results from "./components/Results"
import User_Inputs from "./components/User_Inputs"
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
const isValidInput=inputValues.duration>=1;
  function handleChange(inputIdentifiers,newValue) { 
    setInputValues(prevValues=>{
      return{
        ...prevValues,
        [inputIdentifiers]:+newValue
      };
    });
  }
  return (
    <>
    <Header/>
    <User_Inputs inputValues={inputValues} onChange={handleChange}/>
    {!isValidInput && <p className="center">Please enter the duration grater than Zero</p>}
    {isValidInput &&<Results userInputs={inputValues}/>}
    </>
  )
}

export default App
