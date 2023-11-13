import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>hola: {count} </h1>
        <button onClick={() => setCount(count+1)} > aumentar +1</button>
      </div>
    </>
  )
}

export default App
