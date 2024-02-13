import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Login.css"

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
        <table id="login">
          <tr>
              <th>Username</th>
              <input id="text" type="text" name="username" size="30" maxlength="50" required/>
          </tr>
          <tr>
              <th>Password</th>
              <input id="text" type="text" name="password" size="30" maxlength="30" required/>
          </tr>
        </table>
            <br></br>
            <center>
            <Link to="/Profile">
              <button id = "leftbutton">Login</button>
            </Link>
            </center>
            <br></br>
            <center>
            <Link to="/Register">
              <button id = "rightbutton">Don't have an account? Register</button>
            </Link>
            </center>
    </div>
  )
}