import React, { Component } from 'react';
import axios from 'axios';
import ArticleComponent from '../ArticleComponent/ArticleComponent';
import './Search.css';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      topic: '',
      results: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveArticle = e => {
    e.preventDefault();
    e.persist();
    axios.put(`/api/articles/${e.target.name}`)
      .then(res => {
        console.log('save complete');
        this.attemptSearch(e);
      })
      .catch(err => {
        console.log(err)
      });
  }

  attemptSearch = e => {
    e.preventDefault();
    axios.get('/api/articles', {
      params: {
        topic: this.state.topic,
        saved: false
      }
    })
      .then( res => {
        // const checkForCopies = [];
        // for (let i = 0; i<res.data.length; i++) {
        //   let currentResultTitle = res.data[i].title;
        //   console.log(currentResultTitle);
        //   for (let j = 0; j<checkForCopies.length; j++) {
        //     console.log('hi');
        //     if (checkForCopies[j].title === currentResultTitle) {
        //       console.log('copy');
        //     } else {
        //       checkForCopies.push(res.data[i])
        //     };
        //   }
        // };
        // console.log(checkForCopies);
        this.setState({
          results: res.data
        });

      });
  }

  clearInputs = e => {
    e.preventDefault();
    this.setState({
      topic: '',
      results: ''
    })
  }

  render() {
    return (
      <div className='searchComponent'>
        <h1>Search</h1>
        <h4>Topic</h4>
        <input
          name='topic'
          value={this.state.topic}
          placeholder='Search a keyword!'
          onChange={this.handleChange}></input>
          <br />
        <button
          onClick={e => {
            this.attemptSearch(e)
          }}>Search</button>
        <button
          name='clear'
          onClick={e => {
            this.clearInputs(e)
          }}>Clear</button>
          {
            this.state.results &&
            <ArticleComponent results={this.state.results} save= { true } onClick={ e => {
              this.saveArticle(e)
            }}/>
          }

      </div>
    )
  }
}

export default Search
