import React, { Component } from 'react';

const ArticleComponent = props => {
  return (
  <div key={props.props.id}>
    <a href={ props.props.url }
       target='_blank'><h1>{ props.props.title }</h1></a>
    <p>{ props.props.date.substr(0,10) }</p>
    <button
      name={props.props.id}
      onClick={ e => props.onClick(e)}
      >Save</button>
  </div>
  )
}

export default ArticleComponent
