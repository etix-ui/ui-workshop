import React, { useState } from 'react'

function SimpleCounter() {

  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function subtract() {
    setCount(count - 1)
  }

  return (
    <div>
      <h3>Simple Counter { count }</h3>
      <button onClick={ subtract }>Subtract</button>
      <button onClick={ add }>Add</button>
    </div>
  )
}

export default SimpleCounter
