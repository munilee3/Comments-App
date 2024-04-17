import './index.css'

const CommentItem = props => {
  const {eachComment, toggleIsLike} = props
  const {userName, userComment, isLiked, commentedTime, id} = eachComment

  const userIsLiked = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const userIsLikedTextClassName = isLiked ? 'liked-text' : 'unliked-text'
  const userThumbName = userName.splice(0, 1)
  const onClickLike = () => {
    toggleIsLike(id)
  }
  return (
    <li className="user-comment-contianer">
      <div className="comment-container">
        <p>{userThumbName}</p>
        <div className="user-comment-details">
          <div className="user-name-time">
            <p>{userName}</p>
            <p>{commentedTime}</p>
          </div>
          <p>{userComment}</p>
        </div>
      </div>
      <div className="comment-like-delete-container">
        <div>
          <img src={userIsLiked} alt="like" onClick={onClickLike} />
          <p className={userIsLikedTextClassName} onClick={onClickLike}>
            Like
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
    </li>
  )
}

export default CommentItem
