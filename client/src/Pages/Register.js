import React from 'react'
import {Link} from 'react-router-dom';
import "./Profile.css"
import { client } from './axiosClient'

const RegistrationForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const reformatNumber = (e) => {
    // Insert spaces into textbox for Credit Card #
    let textbox = e.target
    // Base string value to be stored
    let baseString = ''
    // Formatted string to be displayed
    let formattedString = ''
    // We get the base string first
    baseString = textbox.value.replace(/[ ()-]/gi, '')
    let len = baseString.length
    let sections = ['', '', '']
    let section = 0
    for (let i = 0; i < len; i++) {
      if (/\d$/.test(baseString.charAt(i))) {
        if (sections[section].length === 4 && section === 2) {
          break
        } else if (sections[section].length === 3 && section < 2) {
          section++
        }
        sections[section] += baseString.charAt(i)
      }
    }
    if (sections[0].length === 3 && sections[1] !== '') {
      formattedString = '(' + sections[0] + ')'
    } else {
      formattedString = sections[0]
    }
    if (sections[1] !== '') formattedString += '-' + sections[1]
    if (sections[2] !== '') formattedString += '-' + sections[2]
    textbox.value = formattedString
    return baseString.slice(0, 10)
  }
  const handleNumberChange = (e) => {
    const baseNumber = reformatNumber(e)
    setNumber(baseNumber)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmpassword) {
      alert('Passwords do not match !!')
      return
    }

    await client
      .post('/register', { username, password, email, number, confirmpassword })
      .then((response) => {})
      .catch((error) => {
        console.log(error)
        const status = error.response.status
        if (status === 400) {
          alert('Registration failed!')
          navigate('/registration')
        }
      })
    await client
      .post('/login', { username, password })
      .then((response) => {
        localStorage.clear()
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', username)
      })
      .catch((error) => {
        const status = error.response.status
        if (status === 400) {
          alert('Login failed!')
          navigate('/login')
        }
      })
    navigate('/profile/edit')
  }

  if (token) {
    navigate('/profile/edit')
  }
  
  return (
    <div>
        <center>
        <h1>Registration Form</h1>
            <table id="userInfo">
                <tr>
                    <th>Username</th>
                    <input id="text" type="text" name="username" size="30" maxlength="50" pattern='[a-zA-Z0-9]{3,}' placeholder='Enter Username' onChange={handleUsernameChange} required/>
                </tr>
                <tr>
                    <th>Password</th>
                    <input id="text" type="text" name="password" size="30" maxlength="30" pattern='[a-zA-Z0-9]{3,}' placeholder='Enter password' onChange={handleConfirmPasswordChange} required/>
                </tr>
            </table>
        </center>
        <br></br>
        <center>
          <Link to="/Login">
            <button id = "button" onSubmit={handleRegisterSubmit}>Complete Registration</button>
          </Link>
        </center>
        <br></br>
        <center>
        <Link to="/Login">
          <button id = "button">Already have an account? Login here</button>
        </Link>
        </center>
    </div>
  )
}

