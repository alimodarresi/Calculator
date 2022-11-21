import { useState } from "react";


import './index.css'

function App() {

  const [num, setNum] = useState(0);
  const [savednum, setsavednum] = useState(0);
  const [state, setState] = useState('');
  const [epushed, setepushed] = useState(false);
  const [pushed, setpushed] = useState(false);
  
  const num0set = () => {
    
    if(pushed || epushed){
      setNum(0);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10);
    }
  }
  const num1set = () => {
    if(pushed || epushed){
      setNum(1);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 1);
    }
  }
  const num2set = () => {
    if(pushed || epushed){
      setNum(2);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 2);
    }
  }
  const num3set = () => {
    if(pushed || epushed){
      setNum(3);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 3);
    }
  }
  const num4set = () => {
    if(pushed || epushed){
      setNum(4);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 4);
    }
  }
  const num5set = () => {
    if(pushed || epushed){
      setNum(5);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 5);
    }
  }
  const num6set = () => {
    if(pushed || epushed){
      setNum(6);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 6);
    }
  }
  const num7set = () => {
    if(pushed || epushed){
      setNum(7);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 7);
    }
  }
  const num8set = () => {
    if(pushed || epushed){
      setNum(8);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 8);
    }
  }
  const num9set = () => {
    if(pushed || epushed){
      setNum(9);
      setepushed(false);
      setpushed(false);
    }
    else{
      setNum(num*10 + 9);
    }
  }
  
  const mult = () => {
    setState('mult');
    setsavednum(num);
    setpushed(true);

  }

  const sum = () => {
    setState('sum');
    setsavednum(num);
    setpushed(true);
  }
  const minus = () => {
    setState('minus');
    setsavednum(num);
    setpushed(true);
  }

  const equal = () => {
    switch(state){
      case 'sum':
        setNum(num + savednum);
        setepushed(true);
        break;
      case 'minus':
        setNum(savednum - num);
        setepushed(true);
        break;
      case 'mult':
        setNum(num * savednum);
        setepushed(true);
        break;
    }
  }

  const clean = () => {
    setNum(0);
    setpushed(false);
    setepushed(false);
    setState('');
    setsavednum(0);
  }


  return (
    <div className="gridc">
      <input 
        value={num}
        
      />
      <button onClick={num7set}>7</button>
      <button onClick={num8set}>8</button>
      <button onClick={num9set}>9</button>
      <button onClick={mult}>*</button>
      <button onClick={num4set}>4</button>
      <button onClick={num5set}>5</button>
      <button onClick={num6set}>6</button>
      <button onClick={minus}>-</button>
      <button onClick={num1set}>1</button>
      <button onClick={num2set}>2</button>
      <button onClick={num3set}>3</button>
      <button onClick={sum}>+</button>
      <button className="item0" onClick={num0set }>0</button>
      <button onClick={clean}>C</button>
      <button onClick={equal}>=</button>
      
    </div>
  );
} 

export default App;
