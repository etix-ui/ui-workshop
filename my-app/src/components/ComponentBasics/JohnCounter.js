import React, { useState } from 'react'

function JohnCounter(props) {

  const [count, setCount] = useState(props.defaultCount)

  const min = 0
  const max = 10

  const add       = () => setCount(Math.min(max, count + 1))
  const subtract  = () => setCount(Math.max(min, count - 1))
  const reset     = () => setCount(0)

  const percentString = ((count / max) * 100) + '%'

  let bootstrapStyle = 'success'
  if (count < 5) {
    bootstrapStyle = 'warning'
  }
  if (count < 3) {
    bootstrapStyle = 'danger'
  }

  return (
    <div style={{marginTop: 10}} className={'alert alert-'+bootstrapStyle}>

      <h3>Advanced Counter { count }</h3>

      <div className="progress">
        <div style={{width: percentString}} className={'progress-bar progress-bar-'+bootstrapStyle}></div>
      </div>

      <div className="btn-group">
        <button onClick={subtract} className="btn btn-default" disabled={count <= min}>Subtract</button>
        <button onClick={add} className="btn btn-default" disabled={ count >= max }>Add</button>
        <button onClick={reset} className="btn btn-default" disabled={ count >= max }>Reset</button>
      </div>
      </div>
  )
}

JohnCounter.defaultProps = {
  defaultCount: 0,
}

export default JohnCounter
