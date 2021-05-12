import React from 'react'
import UserPosts from '../../components/UserPosts/UserPosts'
import Favorites from '../../components/Favorites/Favorites'

export default function Profile(props) {

  return (
    <div>
      <h2>Welcome User!</h2>
      <h3>Posts</h3>
      <UserPosts posts={props.posts} currentUser={props.currentUser}/>
      <Favorites />
    </div>
  )
}
