import React from 'react'
import SimpleCounter from './SimpleCounter';
import AdvancedCounter from './AdvancedCounter';
import JasonCounter from './JasonCounter';

function ComponentBasics() {
  return (
    <div style={{marginBottom: 600}}>
      <h1>Component Basics</h1>
      <h4>March 14, 2019</h4>
      <SimpleCounter />
      <AdvancedCounter defaultCount={7} />
      <JasonCounter defaultCount={0}/>
    </div>
  )
}
export default ComponentBasics
