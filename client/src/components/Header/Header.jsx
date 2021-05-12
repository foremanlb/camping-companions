import React from 'react'
import './Header.css'
import {Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <h1 id='home_link'>X</h1>
      </Link>
      <h1 id='title'>Camping Companions</h1>
      <Link to='/profile'>
        <img url='https://raw.githubusercontent.com/foremanlb/camping-companions/33893b7356b6d64d586228893118b445aec4e3b3/client/src/assets/images/home_icon.svg' alt='Home Icon'></img>
      </Link>
    </div>
  )
}
