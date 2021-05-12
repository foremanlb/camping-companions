import {useState} from 'react'
import { updatePost, deletePost} from '../../services/posts'

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
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
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
        <button type='submit'>Update Post</button>
      </form>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  )
}
