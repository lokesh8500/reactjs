import React from 'react' 
import { useState } from 'react'

function App() {
  
  const [a, seta] = useState(0)
  const [arr, setarr] = useState([1, 2, 3, 4, 5])
  return (
    <div>
      <h1>{a}</h1>
      <h2>{arr[a]}</h2>
      <button onClick={() => seta(a + 1)}>Increment</button>
      <button onClick={() => seta(a - 1)}>Decrement</button>
    </div>
  )
}

export default App
