import React from 'react'
import {Link} from 'react-router-dom';
import "./header.css"

export default function Header() {
    return (
        <header>
                <Link to="/">
                    <button id = "headerbutton">Home</button>
                </Link>

                <Link to="/Login">
                    <button id = "headerbutton">Login</button>
                </Link>

                <Link to="/Register">
                    <button id = "headerbutton">Register</button>
                </Link>

                <Link to="/QuoteForm">
                    <button id = "headerbutton">Quote Form</button>
                </Link>

                <Link to="/QuotePage">
                    <button id = "headerbutton">Quote Page</button>
                </Link>
        </header>
    )
}