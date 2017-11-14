import React, { Component } from 'react';
import axios from 'axios';
import ArticleComponent from './ArticleComponent';

class Saved extends Component {

  constructor() {
    super();
    this.state = {
      savedResults: []
    }
  }

  refreshSaved = e => {
    e.preventDefault();
    axios.get('/api/saved')
      .then(res => {
        console.log(res.data);
        this.setState({
          savedResults: res.data
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
    this.refreshSaved(e);
  }

  render() {
    return (
      <div>
        <h1>Saved Articles</h1>
        <button
          onClick={e=> {
            this.refreshSaved(e)
          }}>Refresh Saved Articles</button>

          <ArticleComponent remove={ true } onClick={ e => {
            this.removeArticle(e)
          }} />
          {this.state.savedResults &&
            this.state.savedResults.map(x => {
              return (
                <div key={ x._id }>
                  <a href={ x.url }
                     target='_blank'><h1>{ x.title }</h1></a>
                  <p>Date Saved: { x.savedDate }</p>
                  <button
                    name= { x._id }
                    onClick={e => {
                      this.removeArticle(e)
                    }}>Remove</button>
                </div>
              )
            })
          }
      </div>
    )
  }

}

export default Saved
