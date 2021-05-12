import React from 'react'
import { useParams, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCampsite } from '../../services/campsites'
import { createFavorite } from '../../services/favorites'
import CampsitePosts from '../../components/CampsitePosts/CampsitePosts'
import CreatePost from '../../components/CreatePost/CreatePost'

export default function CampsiteDetails(props) {
  const { id } = useParams()
  const [campsite, setCampsite] = useState({})
  
  useEffect(() => {
    fetchCampsite()
  }, [])
  
  const fetchCampsite = async () => {
    const campsite = await getCampsite(id)
    setCampsite(campsite)
  }

  const handleClick = async () => {
    await createFavorite(id)
    props.setToggle(!props.toggle)
  }

  const renderFullHookups = () => {
    if (campsite.full_hookups) {
      return (
        <p>Has full hookups.</p>
      )
    } else {
      return (
        <p>Does not have full hookups.</p>
      )
    }
  }

  const renderPartialHookups = () => {
    if (campsite.partial_hookups) {
      return (
        <p>Has partial hookups.</p>
      )
    } else {
      return (
        <p>Does not have partial hookups.</p>
      )
    }
  }

  const renderFishing = () => {
    if (campsite.fishing) {
      return (
        <p>Has fishing.</p>
      )
    } else {
      return (
        <p>Does not have fishing.</p>
      )
    }
  }

  const renderShowers = () => {
    if (campsite.showers) {
      return (
        <p>Has showers.</p>
      )
    } else {
      return (
        <p>Does not have showers.</p>
      )
    }
  }

  const renderBathrooms = () => {
    if (campsite.bathrooms) {
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
      <h1>{campsite.name}</h1>
      <h2>placeholder</h2>
      <p>{campsite.address}</p>
      <p>{campsite.phone_number}</p>
      <p>Campground Website:<br/><a href={campsite.website} target='_blank' rel='noreferrer noopener'>{campsite.website}</a></p>
      <h3>Description</h3>
      <p>{campsite.description}</p>
      <h3>Open Season</h3>
      <p>{campsite.season}</p>
      {renderFullHookups()}
      {renderPartialHookups()}
      {renderShowers()}
      {renderBathrooms()}
      {renderFishing()}
      <h2>placeholder</h2>
      <button onClick={handleClick}>Add to favorites</button>
      <CreatePost campsite={id} currentUser={props.currentUser} toggle={props.toggle} setToggle={props.setToggle} />
      <CampsitePosts campsite={campsite.id} posts={props.posts} currentUser={props.currentUser}/>
    </div>
  )
}
