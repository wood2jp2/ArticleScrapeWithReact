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
    axios.post(`/api/articles/${this.state.articleId}`, {
        comment: this.state.writtenComment
      }
    )
    .then( res => {
      console.log(res.data)
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
        <button
          name='addCommentButton'
          onClick={ e => {
            this.handleClick(e)
          }}>Add Comment</button>

          {
            this.state.addingComment &&
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

          }
      </div>
    )
  }
}

export default CommentComponent
