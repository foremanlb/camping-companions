import React from 'react'

export default function Showers(props) {
  const renderShowers = () => {
    if (props.campsite.showers) {
      return (
        <p>Has showers.</p>
      )
    } else {
      return (
        <p>Does not have showers.</p>
      )
    }
  }
  return (
    <div>
      {renderShowers()}
    </div>
  )
}
