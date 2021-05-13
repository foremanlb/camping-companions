import { useState } from 'react'
import { createPost } from '../../services/posts'
import './CreatePost.css'

export default function CreatePost(props) {
  const defaultInput = {
    title: '',
    content: '',
    campsite_id: parseInt(props.campsite),
    user_id: props.currentUser.id
  }
  const [input, setInput] = useState(defaultInput)

  const handleChange = (e) => {
    let { name, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPost(input)
    props.setToggle(!props.toggle)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}  id='create_post'>
        <label htmlFor="title">Title</label>
        <input name='title' required/>
        <label htmlFor='content'>Content</label>
        <textarea
          rows='10'
          columns='15'
          type='text'
          name='content' />
        <div id='create_button_container'>
          <button type='submit' id='create_post_button'>Create Post</button>
        </div>
      </form>
    </div>
  )
}