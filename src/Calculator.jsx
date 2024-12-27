import { useState } from "react";
import "./Calculator.css"
import Calculatorinput from "./CalculatorInput";


export default function Calculator() {
  const [digit, setDigit] = useState(""); 
  const handleBtn = (value) => {
    setDigit((prev) => prev + value);
  };

  const handleClear = () => {
    setDigit(""); 
  };

  const handleCalculate = () => {
    try {
      setDigit(eval(digit));
    } catch (error) {
      setDigit("Error"); 
    }
  };

  return (
    <>
    <div className="outter">
    
        <Calculatorinput digit={digit}/>
     
        
     
        <div className="container">
        <button onClick={() => handleBtn("7")} class="btn">7</button>
        <button onClick={() => handleBtn("8")} class="btn">8</button>
        <button onClick={() => handleBtn("9")} class="btn">9</button>
        <button onClick={() => handleBtn("*")} class="btn">*</button>
        </div>
        
   
        <div className="container">
        <button onClick={() => handleBtn("4")} class="btn">4</button>
        <button onClick={() => handleBtn("5")} class="btn">5</button>
        <button onClick={() => handleBtn("6")} class="btn">6</button>
        <button onClick={() => handleBtn("-")} class="btn">-</button>
        </div>
     
        <div className="container">
        <button onClick={() => handleBtn("1")} class="btn">1</button>
        <button onClick={() => handleBtn("2")} class="btn">2</button>
        <button onClick={() => handleBtn("3")} class="btn">3</button>
        <button onClick={() => handleBtn("+")} class="btn-1">+</button>
        </div>

        <div className="container">
        <button onClick={handleClear} class="btn">C</button>
       <button onClick={() => handleBtn("0")} class="btn"  >  0</button>
        <button onClick={() => handleBtn(".")} class="btn">.</button>
        <button onClick={handleCalculate} class="btn">=</button>
        
      </div>
      
    </div>
    </>
  );
}

    
   