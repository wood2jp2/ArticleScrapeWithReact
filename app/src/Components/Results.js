import React, { Component } from 'react';
import axios from 'axios';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      headline: '',
      url: '',
      date: ''
    }
  }

  fetchResults = e => {
    e.preventDefault();
    console.log('hi');
  }

  render() {
    return (
      <div className='currentResults'>
        <button
          onClick={(e) => {
            this.fetchResults(e)
          }}>
          Fetch Results
        </button>
      </div>
    )
  }
}

export default Results
