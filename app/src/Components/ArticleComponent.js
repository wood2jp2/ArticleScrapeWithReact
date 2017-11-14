import React, { Component } from 'react';

const ArticleComponent = props => {
  return (
    <div
      className='searchResults'>
      {
        props.results &&
        props.results.map(x => {
          return (
            <div
              key={ x._id }>
              <a
                href={ x.url }
                target='_blank'><h1>{ x.title }</h1></a>
             <p>{ x.date }</p>

             {
               props.save &&
               <button
                 name={ x._id }
                 onClick={props.onClick}
                 >Save</button>
             }

             {
               props.remove &&
               <button
                 name={ x._id }
                 onClick={ props.onClick }
                 >Remove</button>
             }
             
            </div>
          )
        })
      }
    </div>
  )
}

export default ArticleComponent
