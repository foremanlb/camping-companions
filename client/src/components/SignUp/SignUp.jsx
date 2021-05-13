import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {registerUser, loginUser} from '../../services/auth'
import './SignUp.css'

export default function SignUp(props) {
  const [input, setInput] = useState({})
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await registerUser(input)
    const login = {
      email: input.email,
      password: input.password
    }
    await loginUser(login)
    props.verify()
    history.push('/')
  }

  return (
    <div id='signup_box'>
      <h1>Sign Up</h1>
      <form onChange={handleChange} onSubmit={handleSubmit} id='signup_form'>
        <label htmlFor='email'>Email</label>
        <input name="email" type="email" />
        <label htmlFor='password'>Password</label>
        <input name="password" type="password" />
        <label htmlFor='password_confirmation'>Password Confirmation</label>
        <input name="password_confirmation" type="password" />
        <div id='submit_signup_container'>
          <button type="submit" id='submit_signup_button'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
