import { useEffect, useState } from 'react'
import {getPost} from '../../services/posts'
import {useParams} from 'react-router-dom'

export default function Post(props) {
  const { id } = useParams()
  const [post, setPost ] = useState({})

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    const found = await getPost(id)
    console.log(id)
    console.log(found)
    setPost(found)
  } 

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
