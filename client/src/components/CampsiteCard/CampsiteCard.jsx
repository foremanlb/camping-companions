import React from 'react'
import { Link } from 'react-router-dom'
import './CampsiteCard.css'

export default function CampsiteCard(props) {
  const campsite = props.campsite
  return (
    <div className='campsite_card'>
      <h2>{campsite.name}</h2>
      <h3>{campsite.address}</h3>
      <p>{campsite.description.slice(0, 75)}...</p>
      <div className='link_container'>
        <Link to={`/campsite/${campsite.id}`} id='campsite_link'>Details</Link>
      </div>
    </div>
  )
}
