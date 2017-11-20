import React, { Component } from 'react';
import axios from 'axios';

class CommentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentNumber: 0,
      addingComment: false,
      writtenComment: '',
      articleId: props.article
    }
  }

  handleChange = e => {
    this.setState({
      writtenComment: e.target.value
    });
    console.log(this.state.writtenComment)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      addingComment: false,
      commentNumber: this.state.commentNumber + 1
    });
    axios.post(`/api/articles/${this.state.articleId}`, {
        comment: this.state.writtenComment
      }
    )
    .then( res => {
      console.log('Comment has been added!')
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      addingComment: true
    })
  }

  render() {
    return (
      <div className='commentDiv'>
        <p>{ this.state.commentNumber } comments </p>
          {
            this.state.addingComment ?
            <div>
              <input
                name='commentField'
                value={ this.state.writtenComment }
                onChange={ this.handleChange }></input>
              <button
                name='submitCommentButton'
                onClick={ e => {
                  this.handleSubmit(e)
                }}> Submit Comment</button>
            </div>
            :
            <button
              name='addCommentButton'
              onClick={ e => {
                this.handleClick(e)
              }}>Add Comment</button>
          }
      </div>
    )
  }
}

export default CommentComponent
