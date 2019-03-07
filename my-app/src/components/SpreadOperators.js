import React from 'react'

const SpreadOperators = () => {

  const firstFruitBasket = {
    apples: 10,
    bananas: 4,
    oranges: 2,
    watermelons: 1
  }

  const secondFruitBasket = {
    ...firstFruitBasket,
    watermelons: 3, // this will overwrite existing value becase it is after the spread
    grapes: 15,
  }

  return (
    <div>
      <h3>Spread Operators</h3>
      <pre>firstFruitBasket: { JSON.stringify(firstFruitBasket, null, 2) }</pre>
      <pre>secondFruitBasket: { JSON.stringify(secondFruitBasket, null, 2) }</pre>
    </div>
  )
}

export default SpreadOperators
