import React, { useState } from 'react'

const Calculator = () => {
  const [inputVal,setInputVal] = useState('')
  let [result,setResult] = useState('')

function clear(){
  setInputVal('');
  setResult('')
}
function handleCalc(){
  
  setResult(inputVal===''?'Error':eval(inputVal))
  // setResult()

}

 
  return (
    <>
    <h1>React Calculator</h1>
    <div>
      <input type="text" value={inputVal} readOnly/>
      <div>{result}</div>
    </div>
    <div>
      <div>
        <button value={'7'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>7</button>
        <button value={'8'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>8</button>
        <button value={'9'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>9</button>
        <button value={'+'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>+</button>
      </div>
      <div>
        <button value={4} onClick={(e)=>setInputVal(inputVal+e.target.value)}>4</button>
        <button value={5} onClick={(e)=>setInputVal(inputVal+e.target.value)}>5</button>
        <button value={6} onClick={(e)=>setInputVal(inputVal+e.target.value)}>6</button>
        <button value={'-'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>-</button>
      </div>
      <div>
        <button value={1} onClick={(e)=>setInputVal(inputVal+e.target.value)}>1</button>
        <button value={2} onClick={(e)=>setInputVal(inputVal+e.target.value)}>2</button>
        <button value={3} onClick={(e)=>setInputVal(inputVal+e.target.value)}>3</button>
        <button value={'*'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>*</button>
      </div>
      <div>
        <button onClick={clear}>C</button>
        <button value={0} onClick={(e)=>setInputVal(inputVal+e.target.value)}>0</button>
        <button onClick={handleCalc}>=</button>
        <button value={'/'} onClick={(e)=>setInputVal(inputVal+e.target.value)}>/</button>
      </div>
    </div>
    </>
  )
}

export default Calculator