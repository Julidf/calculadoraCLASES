import React from 'react';
import './styles/App.css';
import { Operator } from './Calculator';
import Calculator from './Calculator';

const calculator = new Calculator();

function App() {

  function addNumber(number: string) {
    calculator.addNumber(number);
  };
  
  function addOperator(operator: Operator) {
    calculator.addOperator(operator);
  };

  function deleteChar() {
    calculator.deleteChar();
  }; 

  function resetCalc() {
    calculator.resetCalc();
  };


  function resolve() {
    calculator.resolve();
  };

  

  return (
    <div className='calculator-container'>

      <div className='second-number'>
        <p>{calculator.state.secondNumber}</p>
      </div>

      <div className='input-container'>
        <input className='first-number' type='text' placeholder='Resultado' value={calculator.state.firstNumber} readOnly></input>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => addNumber("1")}> 1 </button>
        <button className='button' onClick={() => addNumber("2")}> 2 </button>
        <button className='button' onClick={() => addNumber("3")}> 3 </button>
        <button className='button' onClick={() => addOperator("+")}> + </button>
      </div>
      
      <div className='row-calculator'>
        <button className='button' onClick={() => addNumber("4")}> 4 </button>
        <button className='button' onClick={() => addNumber("5")}> 5 </button>
        <button className='button' onClick={() => addNumber("6")}> 6 </button>
        <button className='button' onClick={() => addOperator("-")}> - </button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => addNumber("7")}> 7 </button>
        <button className='button' onClick={() => addNumber("8")}> 8 </button>
        <button className='button' onClick={() => addNumber("9")}> 9 </button>
        <button className='button' onClick={() => addOperator("*")}> * </button>
      </div>

      <div className='row-calculator'>
        <button className='equal' onClick={() => resolve()}> = </button>
        <button className='button' onClick={() => addNumber("0")}> 0 </button>
        <button className='button' onClick={() => addOperator(".")}> . </button>
        <button className='button' onClick={() => addOperator("/")}> / </button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => deleteChar}> DEL </button>
        <button className='special-button' onClick={() => resetCalc}> RESET </button>
      </div>
    </div>
    
  );
}

export default App;
