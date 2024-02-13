import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Login.css"

export default function Login() {
    function loginButton()
    {
        alert('You clicked me!')
    }

    function registerButton()
    {
        alert('You clicked me!')
    }
    return (
        <div>
        <h1>Login</h1>
        <center>
            <Link to="/Profile">
                <button onClick={loginButton}>Login</button>
            </Link>
        </center>
        <center><button onClick={registerButton}>Register</button></center>
        </div>
  )
}