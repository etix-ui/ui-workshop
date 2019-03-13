import React, { Component } from 'react';
import './App.css';
import 'bootstrap3/dist/css/bootstrap.css'

import ES6Primer from './components/ES6Primer';
import ComponentBasics from './components/ComponentBasics';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ComponentBasics />
        <ES6Primer />
      </div>
    );
  }
}

export default App;
