import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./header.css"

export default function Header() {
    return (
        <header>
            <center>
                <Link to="/">
                    <button id>Home</button>
                </Link>
            </center>

            <center>
                <Link to="/Login">
                    <button>Login</button>
                </Link>
            </center>

            <center>
                <Link to="/Register">
                    <button>Register</button>
                </Link>
            </center>
        </header>
    )
}