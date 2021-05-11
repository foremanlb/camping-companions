import api from './apiConfig'

export const getAllCampsites = async () => {
  const res = await api.get('/campsites')
  return res.data
}

export const getCampsite = async (id) => {
  const res = await api.get(`/campsites/${id}`)
  return res.data
}