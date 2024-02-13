import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Profile.css"

export default function Register() {
  return (
    <div id="profileForm">
        <h1>Registration Form</h1>
        <form action="1987505-thankyou.html">
            <table id="userInfo">
                <tr>
                    <th>Username</th>
                    <th><input id="text" type="text" name="first name" size="30" maxlength="50" required/></th>
                </tr>
                <tr>
                    <th>Password</th>
                    <th><input id="text" type="text" name="address 1" size="30" maxlength="30" required/></th>
                </tr>
            </table>

            <hr id="contentBreak"></hr>
        </form>
        <br></br>
        <center>
          <Link to="/Login">
            <button>Complete Registration</button>
          </Link>
        </center>
        <br></br>
        <center>
        <Link to="/Login">
          <button>Already have an account? Login here</button>
        </Link>
        </center>
    </div>
  )
}

