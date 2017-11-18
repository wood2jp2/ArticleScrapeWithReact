import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Main from './Components/Main';
import Search from './Components/SearchComponent/Search';
import Saved from './Components/SavedComponent/Saved';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

          <div className='routerDiv'>
            <Header />
            <Route exact path='/' component={Main} />
            <Route exact path='/saved' component={Saved} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
