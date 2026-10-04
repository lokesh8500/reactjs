import React from 'react'

function Q1() {
    function btnclick(){
        console.log('Button clicked') };
    function mouse(){
        console.log('mouse entered') };
    function inputChange(data){
        console.log(data) };
  return (
    <div>
      <h1>Functions</h1>

      <button onClick={btnclick} onMouseEnter={mouse} onMouseLeave={() => {
        console.log('mouse left')
      }}>
        click me
      </button>

      <input onChange={function(data){console.log(data.target.value)}} type='text' placeholder='Enter text here...' />

      <br></br>
      <hr></hr>
    </div>
  )
}

export default Q1
