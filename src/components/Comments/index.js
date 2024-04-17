import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: '',
    userName: '',
    userComment: '',
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {userName, userComment} = this.state
    const containerBackgroundClassnames =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      userName,
      userComment,
      commentedTime: formatDistanceToNow(new Date()),
      isLiked: false,
      backgroundClassName: containerBackgroundClassnames,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      userName: '',
      userComment: '',
    }))
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeUserComment = event => {
    this.setState({userComment: event.target.value})
  }

  render() {
    const {commentsList, userComment, userName} = this.state
    console.log(commentsList)
    const CommentsLength = commentsList.length
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="title">Comments</h1>
          <div className="form-container">
            <form className="my-form" onSubmit={this.onAddComment}>
              <p className="form-title">Say something about 4.0 Technologies</p>
              <input
                type="text"
                className="user-name"
                placeholder="Your Name"
                value={userName}
                onChange={this.onChangeUserName}
              />
              <br />
              <textarea
                type="text"
                rows="10"
                cols="40"
                className="user-comment"
                placeholder="Your Comment"
                value={userComment}
                onChange={this.onChangeUserComment}
              />
              <br />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="horizontal-line" />
          <p className="comments">
            <span className="comments-count">{CommentsLength}</span> Comments
          </p>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLike={this.toggleIsLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
