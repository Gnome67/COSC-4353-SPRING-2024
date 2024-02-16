import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Profile.css"

export default function Register() {
  return (
    <div>
        <h1>Registration Form</h1>
            <table id="userInfo">
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
          <Link to="/Login">
            <button id = "button">Complete Registration</button>
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

