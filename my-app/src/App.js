import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
// import { HashRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css';
import 'bootstrap3/dist/css/bootstrap.css'

import ES6Primer from './components/ES6Primer';
import ComponentBasics from './components/ComponentBasics';
import JohnCounter from './components/ComponentBasics/JohnCounter';

const myHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={myHistory}>
        <div className="container">

          <h1>Our Single Page App</h1>
          <Link className="btn btn-default" to="/">Home</Link>
          <Link className="btn btn-default" to="/es6">ES6 Primer</Link>
          <Link className="btn btn-default" to="/counters/john">John</Link>

          <Route path="/counters" render={()=><h2>Counters!!</h2>} />

          <Switch>
            <Route exact path="/" component={ComponentBasics} />
            <Route exact path="/es6" component={ES6Primer} />
            <Route exact path="/counters/john" component={JohnCounter} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>

          <div>footer</div>

        </div>
      </Router>
    );
  }
}

export default App;
