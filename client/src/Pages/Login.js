import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Login.css"
import { client } from './axiosClient'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    //e.reportValidity();
    await client
      .post('/login', { username, password })
      .then((response) => {
        localStorage.clear()
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        navigate('/profile')
      })
      .catch((error) => {
        const status = error.response.status
        console.log(error)
        if (status === 400) {
          alert('Login failed!')
          navigate('/login')
        }
      })
  }

  if (token) {
    navigate('/profile')
  }

  return (
    <div>
      <h1>Login</h1>
        <table id="login">
          <tr>
              <th>Username</th>
              <input id="text" type="text" name="username" size="30" maxlength="50" placeholder='Enter Username' onChange={handleUsernameChange} required/>
          </tr>
          <tr>
              <th>Password</th>
              <input id="text" type="text" name="password" size="30" maxlength="30" placeholder='Enter Password' onChange={handlePasswordChange} required/>
          </tr>
        </table>
            <br></br>
            <center>
            <Link to="/Profile">
              <button id = "button" onSubmit={handleLoginSubmit}>Login</button>
            </Link>
            </center>
            <br></br>
            <center>
            <Link to="/Register">
              <button id = "button">Don't have an account? Register</button>
            </Link>
            </center>
    </div>
  )
}

export default LoginForm
