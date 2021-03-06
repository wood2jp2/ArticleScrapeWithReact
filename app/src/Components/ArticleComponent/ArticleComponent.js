import React, { Component } from 'react';
import './ArticleComponent.css';
import CommentComponent from './CommentComponent';

const ArticleComponent = props => {
  return (
    <div
      className='searchResults'>
      {
        props.results &&
        props.results.map(x => {
          return (
            <div
              key={ x._id }
              className='articleComponent'>
              <a
                href={ x.url }
                target='_blank'><h1>{ x.title }</h1></a>
             <p>{ x.date }</p>
             <CommentComponent article={ x._id }/>

             {
               props.save ?
               <button
                 name={ x._id }
                 onClick={props.onClick}
                 className='saveButton'
                 >Save</button>
                 :
               <button
                 name={ x._id }
                 onClick={ props.onClick }
                 className='removeButton'
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
