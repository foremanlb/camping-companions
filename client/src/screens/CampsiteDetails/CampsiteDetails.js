import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCampsite } from '../../services/campsites'
import { createFavorite } from '../../services/favorites'
import CampsitePosts from '../../components/CampsitePosts/CampsitePosts'
import CreatePost from '../../components/CreatePost/CreatePost'
import './CampsiteDetails.css'
import FullHookups from '../../components/FullHookups/FullHookups'
import PartialHookups from '../../components/PartialHookups/PartialHookups'
import Fishing from '../../components/Fishing/Fishing'
import Showers from '../../components/Showers/Showers'
import Bathrooms from '../../components/Bathrooms/Bathrooms'

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


  const renderCreate = () => {
    if (props.currentUser) {
      return (
        <CreatePost campsite={id} currentUser={props.currentUser} toggle={props.toggle} setToggle={props.setToggle} />
      )
    }
  }

  return (
    <div id='campsite_details'>
      <h1 className='details_name'>{campsite.name}</h1>
      <img src={campsite.site_img_url} alt='Campsite' id='campsite_img'></img>
      <h3 className='details_title'>Contact Info</h3>
      <div className='details_card'>
        <p>{campsite.address}</p>
        <p>{campsite.phone_number}</p>
        <p id='campsite_webpage'>Campground Website:<br /><a href={campsite.website} target='_blank' rel='noreferrer noopener' >Click Here!</a></p>
      </div>
      <h3 className='details_title'>Description</h3>
      <div className='details_card' id='details_description'>
        <p>{campsite.description}</p>
      </div>
      <h3 className='details_title'>Open Season</h3>
      <div className='details_card'>
        <p>{campsite.season}</p>
      </div>
      <h3 className='details_title'>Amenities</h3>
      <div className='details_card'>
        <FullHookups campsite={campsite}/>
        <PartialHookups campsite={campsite}/>
        <Showers campsite={campsite}/>
        <Bathrooms campsite={campsite}/>
        <Fishing campsite={campsite} />
      </div>
      <img src={campsite.map_img_url} alt='Campsite Map' id='campsite_map'></img>
      <div id='favorite_container'>
        <button onClick={handleClick} id='add_favorite'>Add to favorites</button>
      </div>
      <h3 className='details_title'>Posts</h3>
      {renderCreate()}
      <CampsitePosts campsite={campsite.id} posts={props.posts} currentUser={props.currentUser}/>
    </div>
  )
}
