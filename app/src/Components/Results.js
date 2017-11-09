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
    console.log(e.target.name);
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
                  {/* <ArticleComponent props={x} onClick={e=>{
                    this.saveArticle(e)}}/> */}
                  <button
                    name= { x._id }
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
