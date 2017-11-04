import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Main from './Components/Main';
import Search from './Components/Search';
import Saved from './Components/Saved';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

          <div className='routerDiv'>
            <Header />
            <Route exact path='/' component={Main} />
            <Route exact path='/main' component={Main} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
