import React from 'react'

export default function CampsiteCard(props) {
  const campsite = props.campsite
  return (
    <div>
      <h2>{campsite.name}</h2>
      <h3>{campsite.address}</h3>
      <p>{campsite.description}</p>
    </div>
  )
}
