import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Main from './Components/Main';
import Search from './Components/Search';
import Saved from './Components/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='routerDiv'>
            <Route exact path='/main' component={Main} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/saved' component={Saved} />
          </div>
        </Router>

        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
