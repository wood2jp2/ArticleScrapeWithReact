import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      headline: '',
      url: '',
      date: ''
    }
  }

render() {
  return (
    <div>
      <h1>Main</h1>
    </div>
  )
}
}

export default Main
