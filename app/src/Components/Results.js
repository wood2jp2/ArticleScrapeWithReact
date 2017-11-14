import React, { Component } from 'react';
import axios from 'axios';
import Saved from './Saved';
import ArticleComponent from './ArticleComponent';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      date: ''
    };
    this.saveArticle.bind(this)
  }

  saveArticle = e => {
    e.preventDefault();
    e.persist();
    axios.put(`/api/articles/${e.target.name}`)
      .then(res => {
        console.log('save complete');
        this.fetchResults(e);
      })
      .catch(err => {
        console.log(err)
      });
  }

  fetchResults = e => {
    e.preventDefault();
    axios.get('/api/articles', {
      'saved': false
    })
      .then(res => {
        const topFiveResults = res.data.slice(0,5);
        this.setState ({
          results: topFiveResults
        });
        console.log(this.state.results)
      })
  }

  render() {
    return (
      <div className='currentResults'>
        <h1>Results</h1>
        <button
          onClick={ e => {
            this.fetchResults(e)
          }}>
          Fetch Results
        </button>

        <ArticleComponent
            results={ this.state.results }
            save={ true }
            onClick={e => {
              this.saveArticle(e)
            }} />

      </div>
    )
  }
}

export default Results
