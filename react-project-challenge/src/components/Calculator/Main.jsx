import React, { useState } from 'react'
import './style.css';
const Main = () => {

  const [firstval, setFirstval] = useState('');
  const [secondval, setSecondval] = useState('');
  const [operatorvalue, setOperatorvalue] = useState('+');
  const [result, setResult] = useState('');
  const handleChange = (event) => {
    if (event.target.name == 'firstval') {
      setFirstval(event.target.value);
    }
    else if (event.target.name == 'secondval') {
      setSecondval(event.target.value);
    }
  }
  const evaluateExpression = () => {
    const num1 = parseFloat(firstval);
    const num2 = parseFloat(secondval);
    switch (operatorvalue) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      case '^':
        setResult(num1 ^ num2);
        break;
      default:
        setResult(0);
    }
  }
  const handleReset = () => {
    setFirstval(' ');
    setSecondval(' ');
    setOperatorvalue('+');
    setResult('');
  }
  const signList = ['+', '-', '*', '/', '^'];
  return (
    <div className="main">
      <div className="card">
        <h1>Mini Calculator</h1>
        <div className="formbox">
          <input type="number" value={firstval} name="firstval" onChange={handleChange} />
          <button onClick={evaluateExpression}>{operatorvalue}</button>
          <input type="number" value={secondval} name="secondval" onChange={handleChange} />
        </div>
        <div className="operators">
          {signList.map((sign) => (
            <button key={sign} data-operatorvalue onClick={() => setOperatorvalue(sign)} >
              {sign}
            </button>
          ))}
        </div>
        <div className="resetbox"><button onClick={handleReset}>Reset</button></div>
        <div className="resultbox" >
          <input type="text" readOnly value={result} />
        </div>
        
      </div>
    </div>

  )
}

export default Main;