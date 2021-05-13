import React from 'react'

export default function Bathrooms(props) {
  const renderBathrooms = () => {
    if (props.campsite.bathrooms) {
      return (
        <p>Has bathrooms.</p>
      )
    } else {
      return (
        <p>Does not have bathrooms.</p>
      )
    }
  }

  return (
    <div>
      {renderBathrooms()}
    </div>
  )
}
