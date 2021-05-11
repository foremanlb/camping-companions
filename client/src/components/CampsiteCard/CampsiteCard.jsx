import React from 'react'
import { Link } from 'react-router-dom'

export default function CampsiteCard(props) {
  const campsite = props.campsite
  return (
    <div className='campsite_card'>
      <h2>{campsite.name}</h2>
      <h3>{campsite.address}</h3>
      <p>{campsite.description}</p>
      <Link to={`/campsite/${campsite.id}`}>Details</Link>
    </div>
  )
}
