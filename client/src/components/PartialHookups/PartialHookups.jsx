import React from 'react'

export default function PartialHookups(props) {
  const renderPartialHookups = () => {
    if (props.campsite.partial_hookups) {
      return (
        <p>Has partial hookups.</p>
      )
    } else {
      return (
        <p>Does not have partial hookups.</p>
      )
    }
  }
  return (
    <div>
      {renderPartialHookups()}
    </div>
  )
}
