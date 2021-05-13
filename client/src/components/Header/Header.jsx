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
          <input type='image' id='logout' src='https://github.com/foremanlb/camping-companions/blob/master/client/src/assets/images/logout_button.png?raw=true' onClick={handleClick} alt='compass or logout icon' />
        </div>
      )
    }
  }

  return (
    <div className='header'>
      <div className='header'>
      <Link to='/'>
        <img src='https://github.com/foremanlb/camping-companions/blob/master/client/src/assets/images/home_icon.png?raw=true' alt='campfire or home icon' id='home_link' ></img>
      </Link>
      <h1 id='title'>Camping Companions</h1>
      <Link to='/profile'>
        <img src='https://github.com/foremanlb/camping-companions/blob/master/client/src/assets/images/profile_icon.png?raw=true' alt='backpack or Profile Icon' id='profile_link'></img>
        </Link>
    {renderLogout()}
      </div>
    </div>
  )
}
