import React from 'react'

const ArrowFunctions = () => {

  // traditional function
  var addOne = function(x) {
    return x + 1
  }

  // arrow function
  const addTwo = (x) => {
    return x + 2
  }

  // a very compact arrow function
  // when there is only one function param, we don't need to enclose with parenthesis `()`
  // when you don't encolse with braces `{}`, you also don't need to have a `return` statement
  const addThree = x => x + 3

  // arrow functions do not have their own scope like traditional functions
  // var that = this
  // var thatOldWay = function() {
  //   return that.value
  // }

  // the above could instead be expressed without having to create a `that` variable
  // const thisNewWay = () => this.value

  // chaining arrow functions
  var oldChainingFunctions = function(first) {
    return function(second) {
      return first + second
    }
  }

  // new with arrow functions
  const newChainingFunctions = (first) => {
    return (second) => {
      return first + second
    }
  }

  // now compacted (paste this line into babel homepage!)
  const newCompactedChainingFunctions = first => second => first + second

  return (
    <div>
      <h3>Arrow Functions</h3>
      <p>There are many ways to express a function in JavaScript.</p>
      <pre>10+1 is { addOne(10) }, 10+2 is { addTwo(10) }, 10+3 is { addThree(10) }</pre>
      <pre>5+6 is { oldChainingFunctions(5)(6) }</pre>
      <pre>5+6 is { newChainingFunctions(5)(6) }</pre>
      <pre>5+6 is { newCompactedChainingFunctions(5)(6) }</pre>
    </div>
  )
}

export default ArrowFunctions
