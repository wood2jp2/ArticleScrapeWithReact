import React, { Component } from 'react';
import axios from 'axios';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: '',
      date: ''
    }
  }

  fetchResults = e => {
    e.preventDefault();
    console.log('hi');
    axios.get('/api/articles')
      .then(res=> {
        console.log(res);
        console.log('heyehey')
      })
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
