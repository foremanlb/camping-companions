import { useState } from 'react'
import { loginUser } from '../../services/auth'
import { Link } from 'react-router-dom'
import './Login.css'

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
        <div id='login_div'>
          <form onChange={handleChange} onSubmit={handleSubmit} id='login_container'>
            <label>Email</label>
            <input name='email' type='email' />
            <label>Password</label>
            <input name='password' type='password' />
            <div id='login_button_container'>
              <button type='submit' id='login_button'>Log In</button>
            </div>
          </form>
          <div id='signup_container'>
            <Link to='/signup' id='signup_button'>Sign Up</Link>
          </div>
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
