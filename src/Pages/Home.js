import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Home.css"

export default function Login() {
    return (
        <div>
        <h1>Homepage</h1>
        <center>
          <Link to ="/Login">
            <button>Login</button>
          </Link>
        </center>
        <center>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </center>
        </div>
  )
}