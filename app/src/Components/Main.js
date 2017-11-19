import React, { Component } from 'react';
import axios from 'axios';
import Results from './ResultsComponent/Results';
import Search from './SearchComponent/Search';
import Saved from './SavedComponent/Saved';

class Main extends Component {

render() {
  return (
    <div className='wholePage'>
      <Search />
      <Results />
    </div>
  )
}
}

export default Main
