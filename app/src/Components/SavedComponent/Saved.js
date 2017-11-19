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
    axios.get('/api/saved')
      .then(res => {
        console.log(res.data);
        this.setState({
          results: res.data
        });
        console.log('saved results refreshed');
      })
  }

  removeArticle = e => {
    e.preventDefault();
    axios.delete(`/api/saved/${e.target.name}`)
      .then(res => {
        console.log('deleted doc');
      })
      .catch(err => {
        return err
      });
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <h1>Saved Articles</h1>

          <ArticleComponent results={ this.state.results } remove={ true } onClick={ e => {
            this.removeArticle(e)
          }} />

      </div>
    )
  }

}

export default Saved
