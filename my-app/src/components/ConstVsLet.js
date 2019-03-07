import React from 'react'

const ConstVsLet = function() {

  var x = 10 // still works, but better to use let or const

  let y = 11
  y = 11 + 1 // we can overwrite the value later down our code

  const z = 12 // we cannot overwrite this value
  // this will throw error if you uncomment because z is a const
  // z = 13

  return (
    <div>
      <h3>Const vs Let</h3>
      <p>It is good practice to stop using <code>var</code> in favor of <code>let</code> and <code>const</code>.</p>
      <p>It is easier to read code if you can reliably determine a const will not be overridden.</p>
      <p>Use <code>const</code> unless you need to overwrite the value later.</p>
      <pre>x:{x}, y:{y}, z:{z}</pre>
    </div>
  )
}

export default ConstVsLet
