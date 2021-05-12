import React from 'react'
import {Link} from 'react-router-dom'

export default function UserPosts(props) {
  const posts = props.posts
  const currentUser = props.currentUser

  const renderPosts = () => {
    posts.map(post => {
      if (post.user_id === currentUser.id) {
        return (
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        )
      }
    })
  }
  return (
    <div>
      {renderPosts}
    </div>
  )
}
