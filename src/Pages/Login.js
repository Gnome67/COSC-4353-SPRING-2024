import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Login.css"

function loginButton()
{
  alert('You clicked me!')
}

function registerButton()
{
  alert('You clicked me!')
}

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <center><button onClick={loginButton}>Login</button></center>
      <center><button onClick={registerButton}>Register</button></center>
    </div>
  )
}