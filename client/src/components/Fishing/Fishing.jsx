import React from 'react'

export default function Fishing(props) {
  const renderFishing = () => {
    if (props.campsite.fishing) {
      return (
        <p>Has fishing.</p>
      )
    } else {
      return (
        <p>Does not have fishing.</p>
      )
    }
  }
  return (
    <div>
      {renderFishing()}
    </div>
  )
}
