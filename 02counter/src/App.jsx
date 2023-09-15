import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 15;
  const addValue = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai or code</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={decrement}>Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
