import React from 'react'

import ConstVsLet from './ConstVsLet';
import ArrowFunctions from './ArrowFunctions';
import Destructuring from './Destructuring';
import EnhancedObjectLiterals from './EnhancedObjectLiterals';
import SpreadOperators from './SpreadOperators';

const ES6Primer = function() {
  return (
    <div>
      <h1>ES6 Primer</h1>
      <p>Try out <a target="babel" href="https://babeljs.io/">Babel's homepage</a> to look at how the new modern JavaScript syntax compiles out to the older JS.</p>

      {/* Topic Components */}
      <ConstVsLet />
      <ArrowFunctions />
      <Destructuring title="Destructuring Assignments" description="The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables." />
      <EnhancedObjectLiterals />
      <SpreadOperators />
    </div>
  )
}

export default ES6Primer
