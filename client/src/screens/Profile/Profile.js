import React from 'react'
import UserPosts from '../../components/UserPosts/UserPosts'
import Favorites from '../../components/Favorites/Favorites'
import './Profile.css'

export default function Profile(props) {

  const renderPosts = () => {
    if (props.currentUser) {
      return (
        <UserPosts posts={props.posts} currentUser={props.currentUser}/>
      )
    }
  }

  const renderFavorites = () => {
    if (props.currentUser) {
      return (
        <Favorites />
      )
    }
  }

  return (
    <div id='profile_container'>
      <h1 id='profile_name'>Welcome User!</h1>
      <h3 className='profile_title'>Posts</h3>
      {renderPosts()}
      <h3 className='profile_title'>Favorites</h3>
      {renderFavorites()}
      <div id='blank_space'></div>
    </div>
  )
}
