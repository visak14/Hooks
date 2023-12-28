import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
    <h2>counter value : {count}</h2>
     <button onClick={addValue}>add</button>
     <br/>
     <button onClick={removeValue}>sub</button>
    </>
  )
}

export default App
