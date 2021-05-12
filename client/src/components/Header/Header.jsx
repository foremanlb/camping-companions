import React from 'react'
import './Header.css'
import {Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img src='https://github.com/foremanlb/camping-companions/blob/master/client/src/assets/images/home_icon.png?raw=true' alt='Home Icon' id='home_link' ></img>
      </Link>
      <h1 id='title'>Camping Companions</h1>
      <Link to='/profile'>
        <h1 id='profile_link'>X</h1>
      </Link>
    </div>
  )
}
