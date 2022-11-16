import React from 'react';
export type Operator = "+" | "-" | "*" | "/" | ".";

class Calculator {

  state = {
     firstNumber: "0",
     secondNumber: ""
  };
   
  private setState(result: string) {
    this.state.firstNumber = result;
  }
  private isOperator = (lastValue: string) => {
    return (lastValue === "+" ) || (lastValue === "-" ) || (lastValue === "*" ) || (lastValue === "/") || (lastValue === ".")
  }
  private lastVal(state: string){  
    return state.substr(state.length-1, 1);
  }

  addNumber(number: string){
    this.setState(this.state.firstNumber + number);
  };

  addOperator(operator: Operator) {
    if (this.state.firstNumber !== "" && !this.isOperator(this.lastVal(this.state.firstNumber))){
      this.setState(this.state.firstNumber + operator);
    }
  };

  deleteChar(){
    this.setState(this.state.firstNumber.substring(0, this.state.firstNumber.length - 1));
  };

  resetCalc(){
    this.setState("");
  };

  resolve(){
    if (!this.isOperator(this.lastVal(this.state.firstNumber)) && this.state.firstNumber !== ""){
      try {
         let finalValue = eval(this.state.firstNumber); // eslint-disable-line
         if (finalValue == "Infinity"){ 
          alert("Invalid argument");
          this.resetCalc();
        }else{  
          this.setState(String (finalValue));
        }
      }catch(e){
        alert("Invalid argument");
        this.resetCalc();
      }
    }
    console.log(this.state.firstNumber);
  }

}

export default Calculator;