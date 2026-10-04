import React from 'react'

function App() {
    function form(data){
      data.preventDefault()
      console.log(data.target[0].value)
    }
  return (
    <div>
      <h1>Form Handling</h1>
      <form onSubmit={(data) => {
        form(data)
      }}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
