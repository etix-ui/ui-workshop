import React from 'react'
import SimpleCounter from './SimpleCounter';
import AdvancedCounter from './AdvancedCounter';
import QiCounter from './QiCounter';

function ComponentBasics() {
  return (
    <div style={{marginBottom: 600}}>
      <h1>Component Basics</h1>
      <h4>March 14, 2019</h4>
      <SimpleCounter />
      <AdvancedCounter defaultCount={7} />
      <QiCounter defaultCount={7}/>
    </div>
  )
}
export default ComponentBasics
