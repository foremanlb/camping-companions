import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {getPosts} from '../../services/posts'

export default function CampsitePosts(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  return (
    <div>
      {posts.map((post) => {
        if (post.campsite_id === props.campsiteID) {
          return (
            <Link to={`post/${post.id}`}>{post.title}</Link>
          )
        }
      })}
    </div>
  )
}
