import { useState, useEffect } from 'react'
import { getAllFavorites } from '../../services/favorites'
import CampsiteCard from '../CampsiteCard/CampsiteCard'

export default function Favorites(props) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavorites()
  }, [])

  const fetchFavorites = async () => {
    const data = await getAllFavorites()
    setFavorites(data)
  }


  return (
    <div>
      {favorites.map(favorite => {
        return <CampsiteCard campsite={favorite} />
      })}
    </div>
  )
}
