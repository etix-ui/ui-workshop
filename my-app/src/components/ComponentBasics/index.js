import React from 'react'
import SimpleCounter from './SimpleCounter';
import AdvancedCounter from './AdvancedCounter';
import JasonCounter from './JasonCounter';

import QiCounter from './QiCounter';
import ZelalemCounter from './ZelalemCounter';
import JohnCounter from './JohnCounter'

function ComponentBasics() {
  return (
    <div style={{marginBottom: 600}}>
      <h1>Component Basics</h1>
      <h4>March 14, 2019</h4>
      <SimpleCounter />
      <AdvancedCounter defaultCount={7} />
      <JasonCounter defaultCount={0}/>
      <QiCounter defaultCount={7}/>
      <ZelalemCounter defaultCount={7} />
      <JohnCounter defaultCount={8} />
    </div>
  )
}
export default ComponentBasics
