import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import { SourceMap } from 'module';

function App() {

  type Operator = "+" | "-" | "*" | "/" | ".";
  

  const [state, setState] = useState("");

  function deleteChar() {
    setState(state.substring(0, state.length - 1))
  }; 
  
  // (state.slice(-1) !== "+" || "-" || "*" || "/")

  function AddOperator(operator: Operator) {
    if (state !== ""){
      setState(state + operator)
      console.log(state.slice(-1))
    }

  };

  function resolve(){
    alert("RESULT: " + eval(state));
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
        <button className='button' onClick={() => AddOperator(".")}>.</button>
        <button className='button' onClick={() => setState(state + "0")}>0</button>
        <button className='button' onClick={() => AddOperator("/")}>/</button>
        <button className='button' onClick={() => resolve()}>=</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => deleteChar()}>DEL</button>
        <button className='special-button' onClick={() => setState("")}>RST</button>
      </div>

      <div className='input-container'>
        <input className='calc' type='text' placeholder='Resultado' value={state} readOnly></input>
      </div>

    </div>
  );
}

export default App;
