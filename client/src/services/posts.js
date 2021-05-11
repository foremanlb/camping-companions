import api from './apiConfig'

export const getAllPosts = async () => {
  const res = await api.get('/posts')
  return res.data
}

export const getCampsite = async (id) => {
  const res = await api.get(`/posts/${id}`)
  return res.data
}

export const createPost = async (formData) => {
  const res = await api.post('/posts', { post: formData })
  return res.data
}

export const updatePost = async (formData) => {
  const res = await api.put('/posts', { post: formData })
  return res.data
}