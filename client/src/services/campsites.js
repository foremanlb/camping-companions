import api from './apiConfig'

export const getCampsites = async () => {
  const res = await api.get('/campsites')
  return res.data
}

export const getCampsite = async (id) => {
  const res = await api.get(`/campsites/${id}`)
  return res.data
}