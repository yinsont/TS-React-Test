import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import Form from './components/Form';


function App() {
  const [counter, setCounter] = useState(0)
  const [formData, setFormData] = useState({firstName: '', lastName: ''})
  
  const incrementCounter = ():void => {
    setCounter(counter + 1)
  }
  
  const decrementCounter = ():void => {
    setCounter(counter - 1)
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
  
    setFormData({
      firstName: firstName,
      lastName: lastName
    });
  };
  

  const handleClick = () => {
    console.log(formData)
  }

  return (
    <div className="App">
      <Hello text={'hello'}/>
      <h1>{counter}</h1>
      <div>
        <Increment increment={incrementCounter}/>
        <Decrement decrement={decrementCounter}/>
      </div>
      <Form handleSubmit = {handleSubmit}/>
      <button onClick = {handleClick}>Click to check formData</button>
    </div>
  );
}

export default App;
