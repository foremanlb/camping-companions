import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {registerUser, loginUser} from '../../services/auth'

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
    history.push('/')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <label>Password Confirmation</label>
        <input name="password_confirmation" type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
