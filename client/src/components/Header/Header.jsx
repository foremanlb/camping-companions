import React from 'react'
import './Header.css'
import {Link } from 'react-router-dom'

export default function Header(props) {
  
  const handleClick = async () => {
    await localStorage.clear()
    props.setCurrentUser(null)
  }
  
  const renderLogout = () => {
    if (props.currentUser) {
      return (
        <div>
          <input type='image' className='header_link' src='https://github.com/foremanlb/camping-companions/blob/master/client/src/images/css/logout_button.png?raw=true' onClick={handleClick} alt='compass or logout icon' />
        </div>
      )
    }
  }

  const renderProfileButton = () => {
    if (props.currentUser) {
      return (
      <Link to='/profile'>
        <img src='https://github.com/foremanlb/camping-companions/blob/master/client/src/images/css/profile_icon.png?raw=true' alt='backpack or Profile Icon' className='header_link'></img>
      </Link>
      )
    }
  }

  return (
    <div className='header'>
      <div className='header'>
      <Link to='/'>
        <img src='https://github.com/foremanlb/camping-companions/blob/master/client/src/images/css/home_icon.png?raw=true' alt='campfire or home icon' className='header_link' ></img>
      </Link>
        <h1 id='title'>Camping Companions</h1>
      {renderProfileButton()}
      {renderLogout()}
      </div>
    </div>
  )
}
