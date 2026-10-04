import React from 'react'

function Q2() {
  return (
    <div>
        <br />
      <div onMouseMove={function(data){console.log('x:' + data.clientX + ', y:' + data.clientY);}} className='box'>

      </div>
    </div>
  )
}

export default Q2
