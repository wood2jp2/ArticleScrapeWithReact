import React, { Component } from 'react';

const SearchResult = props => {
  return (
    <div
      className='searchResults'>
      {
        props.results &&
        props.results.map(x => {
          return (
            <div key={ x._id }>
              <a href={ x.url }
                target='_blank'><h1>{ x.title }</h1></a>
             <p>{ x.date }</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResult
