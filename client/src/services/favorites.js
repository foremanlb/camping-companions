import api from './apiConfig'

export const createFavorite = async (campsite_id) => {
  const res = await api.post(`/favorites`, { campsite_id })
  return res.data
}

export const getAllFavorites = async () => {
  const res = await api.get("/favorites")
  return res.data
}