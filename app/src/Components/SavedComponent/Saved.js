import React, { Component } from 'react';
import axios from 'axios';
import './Saved.css';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

class Saved extends Component {

  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    axios.get('/api/articles?saved=true')
      .then(res => {
        console.log('successful saved pull');
        this.setState({
          results: res.data
        });
      })
  }

  removeArticle = e => {
    e.preventDefault();
    axios.delete(`/api/articles/${e.target.name}`)
      .then(res => {
        this.componentDidMount();
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Saved Articles</h1>
          <ArticleComponent
            results={ this.state.results }
            remove={ true }
            onClick={ e => {
              this.removeArticle(e)
            }} />

      </div>
    )
  }
}

export default Saved
