import { React} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { clientWithAuth } from './axiosClient'
import "./header.css"

export default function Header() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        const username = localStorage.getItem('username')
        const token = localStorage.getItem('token')
        if (!token) {
        localStorage.clear()
        navigate('/login')
        }
        await clientWithAuth(token)
        .post('/logout', { username })
        .then((response) => {})
        .catch((error) => {
            console.log(error)
        })
        localStorage.clear()
        navigate('/')
    }

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

                <Link to="/quote">
                    <button className="headerbutton">Quote Form</button>
                </Link>

                <Link to="/history">
                    <button className="headerbutton">Quote Page</button>
                </Link>
                <button className='headerbutton' onClick={handleLogout}>Log Out</button>
        </header>
    )
}