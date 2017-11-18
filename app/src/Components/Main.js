import React, { Component } from 'react';
import axios from 'axios';
import Results from './ResultsComponent/Results';
import Search from './SearchComponent/Search';
import Saved from './Saved';

class Main extends Component {

render() {
  return (
    <div>
      <Search />
      <Results />
    </div>
  )
}
}

export default Main
