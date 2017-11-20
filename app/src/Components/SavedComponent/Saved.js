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
        console.log(res.data);
        this.setState({
          results: res.data
        });
      })
  }

  removeArticle = e => {
    e.preventDefault();
    axios.put(`/api/articles/${e.target.name}`, {
      saved: false
    })
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
