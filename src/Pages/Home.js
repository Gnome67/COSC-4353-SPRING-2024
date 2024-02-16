import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Home.css"

export default function Login() {
    return (
        <div>
        <h1>Homepage</h1>
          <div id = "mydiv">
          <center>
            <Link to ="/Login">
              <button id = "button">Login</button>
            </Link>
            <Link to="/Register">
              <button id = "button">Register</button>
            </Link>
          </center>
          </div>
        </div>
  )
}