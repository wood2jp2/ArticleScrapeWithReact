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

// to set the number of comments for each article to the correct current count
  componentDidMount() {
    axios.get(`/api/articles/${this.state.articleId}`)
      .then( res => {
        res.data.forEach( x => {
          this.setState({
            commentNumber: x.comment.length,
            allComments: x.comment
          })
        })
      })
  }

// for tracking user inputted comments
  handleChange = e => {
    this.setState({
      writtenComment: e.target.value
    });
    console.log(this.state.writtenComment)
  }

// submitting a comment and posting to correct article
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      addingComment: false,
      writtenComment: '',
      commentNumber: this.state.commentNumber + 1
    });
    axios.post(`/api/articles/${this.state.articleId}`, {
        comment: this.state.writtenComment
      }
    )
    .then( res => {
      console.log('Comment has been added!')
    });
    this.componentDidMount();
  }

  showComments = () => {
    this.state.viewComments ?
    this.setState({
      viewComments: false
    }) :
    this.setState({
      viewComments: true
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
        <span
          name='annotatedCommentSpan'
          onClick={ this.showComments }>
          <p>{
            this.state.viewComments ?
            'Hide' : 'Show'
          } { this.state.commentNumber} comments </p>
        </span>

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

          {
            this.state.viewComments &&
            this.state.allComments.map( (x, i) => {
              return (
                <div
                  key={i}>
                  <p> Comment ({ i + 1 }): { x }</p>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default CommentComponent
