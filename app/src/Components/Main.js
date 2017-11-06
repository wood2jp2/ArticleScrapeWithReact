import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';
import Search from './Search';

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
