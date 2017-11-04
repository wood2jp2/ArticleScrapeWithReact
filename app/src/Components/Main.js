import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';

class Main extends Component {

render() {
  return (
    <div>
      <h1>Main</h1>
      <Results />
    </div>
  )
}
}

export default Main
