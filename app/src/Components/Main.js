import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';
import Search from './Search';
import Saved from './Saved';

class Main extends Component {

render() {
  return (
    <div>
      <Search />
      <Results />
      <Saved />
    </div>
  )
}
}

export default Main
