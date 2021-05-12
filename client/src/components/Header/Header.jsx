import React from 'react'
import './Header.css'
import {Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>X</h1>
      </Link>
      <h1>Camping Companions</h1>
      <Link to='/profile'>
        <h1>X</h1>
      </Link>
    </div>
  )
}
