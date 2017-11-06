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

  saveArticle = e => {
    e.preventDefault();
    axios.post('/api/saved')
      .then(res => {
        console.log(res)
      })
    console.log('attempt Save');
  }

  fetchResults = e => {
    e.preventDefault();
    console.log('hi');
    axios.get('/api/articles')
      .then(res => {
        this.setState ({
          results: res.data
        });
        console.log(this.state.results)
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
          {this.state.results &&
            this.state.results.map(x => {
              return (
                <div key={ x._id }>
                  <a href={ x.url }
                     target='_blank'><h1>{ x.title }</h1></a>
                  <p>{ x.date.substr(0,10) }</p>
                  <button
                    onClick={e => {
                      this.saveArticle(e)
                    }}>Save</button>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default Results
