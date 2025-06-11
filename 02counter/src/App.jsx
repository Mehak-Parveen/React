import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    counter  = counter +1
    setCounter(counter)
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter</h1>

      <h2>Counter vlaue:{counter}</h2>

      <button onClick={addValue}>Add Vlaue</button>
      <br />
      <button onClick={removeValue}>remove vlaue</button>
    </>
  )
}

export default App
