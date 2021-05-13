import React from 'react'

export default function FullHookups(props) {
  const renderFullHookups = () => {
    if (props.campsite.full_hookups) {
      return (
        <p>Has full hookups.</p>
      )
    } else {
      return (
        <p>Does not have full hookups.</p>
      )
    }
  }

  return (
    <div>
      {renderFullHookups()}
    </div>
  )
}
