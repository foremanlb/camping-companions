import React from 'react'
import { Link } from 'react-router-dom'
import './UserPosts.css'

export default function UserPosts(props) {
  const posts = props.posts
  const currentUser = props.currentUser

  return (
    <div id='user_posts_container'>
      {posts.map((post) => {
      if (post.user_id === currentUser.id) {
        return (
          <Link to={`/post/${post.id}`} key={post.id}>{post.title}</Link>
        )
      }
    })}
    </div>
  )
}
