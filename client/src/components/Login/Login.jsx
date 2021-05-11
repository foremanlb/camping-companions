import { useState } from 'react'
import { loginUser } from '../../services/auth'
import {Link} from 'react-router-dom'

export default function Login(props) {
  const [input, setInput] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await loginUser(input)
    console.log(user)
    props.verify()
  }

  const renderLoginBar = () => {
    if (!props.currentUser) {
      return (
        <div>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <label>Email</label>
            <input name='email' type='email' />
            <label>Password</label>
            <input name='password' type='password' />
            <button type='submit'>Log In</button>
          </form>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )
    } 
  }
  
  return (
    <div>
      {renderLoginBar()}
    </div>
  )
}
