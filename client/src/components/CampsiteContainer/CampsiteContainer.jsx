import React from 'react'
import CampsiteCard from '../CampsiteCard/CampsiteCard'

export default function CampsiteContainer(props) {
  const campsites = props.campsites
  const abbreviation = props.abbreviation
  return (
    <div>
      {campsites.map((campsite) => {
        if (campsite.state === abbreviation)
        return (
          <CampsiteCard campsite={campsite} />
        )
      })}
    </div>
  )
}
