import React, { Component } from 'react'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      topic: '',
      startYear: '',
      endYear: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

  attemptSearch = e => {
    e.preventDefault();
    console.log('lets search')
  }

  render() {
    return (
      <div className='searchComponent'>
        <h1>Search</h1>
        <h4>Topic</h4>
        <input
          name='topic'
          value={this.state.topic}
          onChange={this.handleChange}></input>
        <h4>Start Year</h4>
        <input
          name='startYear'
          value={this.state.startYear}
          onChange={this.handleChange}></input>
        <h4>End Year</h4>
        <input
          name='endYear'
          value={this.state.endYear}
          onChange={this.handleChange}></input>
        <button
          onClick={e => {
            this.attemptSearch(e)
          }}>Search</button>
      </div>
    )
  }

}

export default Search
