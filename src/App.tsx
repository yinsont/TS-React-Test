import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = ():void => {
    setCounter(counter + 1)
  }

  const decrementCounter = ():void => {
    setCounter(counter - 1)
  }
  return (
    <div className="App">
      <Hello text={'hello'}/>
      <h1>{counter}</h1>
      <div>
        <Increment increment={incrementCounter}/>
        <Decrement decrement={decrementCounter}/>
      </div>
    </div>
  );
}

export default App;
