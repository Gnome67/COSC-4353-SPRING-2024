import React from 'react'
import {Link} from 'react-router-dom';
import "./header.css"

export default function Header() {
    return (
        <header id="header"> 
                <Link to="/">
                    <button className="headerbutton">Home</button>
                </Link>

                <Link to="/Login">
                    <button className="headerbutton">Login</button>
                </Link>

                <Link to="/Register">
                    <button className="headerbutton">Register</button>
                </Link>

                <Link to="/QuoteForm">
                    <button className="headerbutton">Quote Form</button>
                </Link>

                <Link to="/QuotePage">
                    <button className="headerbutton">Quote Page</button>
                </Link>
        </header>
    )
}