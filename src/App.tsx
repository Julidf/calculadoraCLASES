import React from 'react';
import './styles/App.css';
import { useState } from 'react';

function App() {

  type Operator = "+" | "-" | "*" | "/" | ".";
  const [state, setState] = useState("");
  let lastVal = state.substr(state.length-1, 1);

  function deleteChar() {
    setState(state.substring(0, state.length - 1))
  }; 
  
  function AddOperator(operator: Operator) {
    if (state !== "" && !isOperator(lastVal)){
      setState(state + operator)
    }
  };

  const isOperator = (lastValue: string) => {
    return (lastValue === "+" ) || (lastValue === "-" ) || (lastValue === "*" ) || (lastValue === "/") || (lastValue === ".")
  }

  function resolve(){
    if (!isOperator(lastVal) && state !== ""){
      try {
        let finalValue = eval(state); // eslint-disable-line
        if (finalValue == "Infinity"){
          alert("Invalid argument " + setState(""));
          setState("");
        }else{  
          setState(String (finalValue));
        }
      }catch(e){
        alert("Invalid argument");
        setState("");
      }
    }
  }

  return (
    <div className='calculator-container'>
      <div className='row-calculator'>
        <button className='button' onClick={() => setState(state + "1")}>1</button>
        <button className='button' onClick={() => setState(state + "2")}>2</button>
        <button className='button' onClick={() => setState(state + "3")}>3</button>
        <button className='button' onClick={() => AddOperator("+")}>+</button>
      </div>
      
      <div className='row-calculator'>
        <button className='button' onClick={() => setState(state + "4")}>4</button>
        <button className='button' onClick={() => setState(state + "5")}>5</button>
        <button className='button' onClick={() => setState(state + "6")}>6</button>
        <button className='button' onClick={() => AddOperator("-")}>-</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => setState(state + "7")}>7</button>
        <button className='button' onClick={() => setState(state + "8")}>8</button>
        <button className='button' onClick={() => setState(state + "9")}>9</button>
        <button className='button' onClick={() => AddOperator("*")}>*</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => resolve()}>=</button>
        <button className='button' onClick={() => setState(state + "0")}>0</button>
        <button className='button' onClick={() => AddOperator(".")}>.</button>
        <button className='button' onClick={() => AddOperator("/")}>/</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => deleteChar()}>DEL</button>
        <button className='special-button' onClick={() => setState("")}>RESET</button>
      </div>

      <div className='input-container'>
        <input className='input' type='text' placeholder='Resultado' value={state} readOnly></input>
      </div>

    </div>
  );
}

export default App;
