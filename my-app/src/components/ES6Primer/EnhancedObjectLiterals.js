import React from 'react'

const EnhancedObjectLiterals = () => {

  const firstName = 'Clayton'
  const lastName = 'Bell'
  const email = 'claytonfbell@gmail.com'
  const numberOfPets = 2

  var oldWay = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    numberOfPets: numberOfPets,
    favoriteColor: 'green',
  }

  // this works when key matches variable
  const compactWay = {
    firstName,
    lastName,
    email,
    numberOfPets,
    favoriteColor: 'blue',
  }

  return (
    <div>
      <h3>Enhanced Object Literals</h3>
      <pre>{ JSON.stringify(oldWay, null, 2) }</pre>
      <pre>{ JSON.stringify(compactWay, null, 2) }</pre>
    </div>
  )

}

export default EnhancedObjectLiterals
