import React, { Component } from 'react';
import axios from 'axios';
import './Results.css';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

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
    axios.put(`/api/articles/${e.target.name}`, {
      saved: true
    })
      .then(res => {
        console.log('save complete');
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err)
      });
  }

  componentDidMount() {
    axios.get('/api/articles?saved=false')
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
        <h1>Current Results</h1>
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
