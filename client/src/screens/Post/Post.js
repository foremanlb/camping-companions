import { useEffect, useState } from 'react'
import {getPost} from '../../services/posts'
import { useParams } from 'react-router-dom'
import PostCrud from '../../components/PostCrud/PostCrud'
import './Post.css'

export default function Post(props) {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [toggle2, setToggle2] = useState(false)

  useEffect(() => {
    fetchPost()
  }, [toggle2])

  const fetchPost = async () => {
    const found = await getPost(id)
    setPost(found)
  }

  const renderCrud = () => {
    if (post.user_id === props.currentUser.id) {
      return (
        <PostCrud post={post} currentUser={props.currentUser} setToggle2={setToggle2} toggle2={toggle2}/>
      )
    } else {
      return (
        <>
          <h1 id='post_title'>{post.title}</h1>
          <p id='post_body'>{post.content}</p>
        </>
      )
    }
  }

  return (
    <div id='post'>
      {renderCrud()}
    </div>
  )
}
