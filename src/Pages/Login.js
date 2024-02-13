import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Login.css"
export default function Profile() {
  return (
    <table id="userInfo">
        <tr>
            <th>Username</th>
            <th><input id="text" type="text" name="first name" size="30" maxlength="50" required/></th>
        </tr>


        <tr>
            <th>Password</th>
            <th><input id="text" type="text" name="address 1" size="30" maxlength="30" required/></th>
        </tr>

        <Link to="/Profile">
          <button>Login</button>
        </Link>
    </table>
  )
}