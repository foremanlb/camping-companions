import {useState} from 'react'
import { updatePost, deletePost } from '../../services/posts'
import './PostCrud.css'

export default function PostCrud(props) {
  const post = props.post
  const [input, setInput] = useState(post)

  const handleDelete = async () => {
    await deletePost(post.id)
    props.setToggle2(!props.toggle2)
  }

  const handleChange = (e) => {
    let { name, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePost(input.id, input)
    props.setToggle2(!props.toggle2)
    alert("Post Updated")
  }

  return (
    <div id='crud_container'>
      <form onSubmit={handleSubmit} onChange={handleChange} id='post_crud'>
        <label htmlFor="title">Title</label>
        <input
          name='title'
          required
          value={input.title} />
        <label htmlFor='content'>Content</label>
        <textarea
          rows='10'
          columns='15'
          type='text'
          name='content'
          value={input.content} />
        <div id='update_container'>
          <button type='submit' id='update_button'>Update Post</button>
        </div>
      </form>
      <div id='delete_container'>
        <button onClick={handleDelete} id='delete_button'>Delete Post</button>
      </div>
    </div>
  )
}
