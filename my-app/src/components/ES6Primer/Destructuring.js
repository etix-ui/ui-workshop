import React from 'react'

const Destructuring = props => {

  // we can grab properties we expect from the props object
  const { title, description } = props

  // we can destructure arrays
  // (try pasting these two lines into babel homepage!)
  const myArray = ['apple', 'orange', 'banana']
  const [first, second] = myArray

  // we can destructure with defaults if properties of an object are undefined
  // (try pasting this into babel homepage!)
  const person = { name: 'Clay' }
  const { name = 'unknown', numberOfPets = 2 } = person

  // we can use destructures and defaults in our function arguments!
  const yourAgeAndFavoriteColor = ({age = 'unknown', favoriteColor = 'green'}) => {
    return 'Your age is ' + age + ' and your favorite color is ' + favoriteColor
  }

  return (
    <div>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <pre>first:{ first }, second:{ second }</pre>
      <pre>name:{ name }, numberOfPets:{ numberOfPets }</pre>
      <pre>{ yourAgeAndFavoriteColor({age: 40, favoriteColor: 'blue'}) }</pre>
      <pre>{ yourAgeAndFavoriteColor({age: 40}) }</pre>
      <pre>{ yourAgeAndFavoriteColor({}) }</pre>
    </div>
  )
}

export default Destructuring
