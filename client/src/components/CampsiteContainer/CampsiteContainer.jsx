import React from 'react'
import CampsiteCard from '../CampsiteCard/CampsiteCard'
import './CampsiteContainer.css'

export default function CampsiteContainer(props) {
  const campsites = props.campsites
  const abbreviation = props.abbreviation
  return (
    <div className='card_container'>
      {campsites.map((campsite) => {
        if (campsite.state === abbreviation)
        return (
          <CampsiteCard campsite={campsite} key={campsite.id}/>
        )
      })}
    </div>
  )
}
