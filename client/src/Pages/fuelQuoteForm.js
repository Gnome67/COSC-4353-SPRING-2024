import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { clientWithAuth } from '../axiosClient'
import "./fuelQuoteForm.css"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export default function FuelQuoteForm() {
    const username = localStorage.getItem('username')
    const [gallons, setGallons] = useState('')
    const [date, setDate] = useState('')
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [FormValid, setFormValid] = useState(false)
    const [profile, setProfile] = useState({
        address1: '...',
        address2: '...',
        city: '...',
        state: '...',
        zipcode: '...',
    })

    const [quote, setQuote] = useState({
        price: '...',
        due: '...',
    })

    const handleCheckFormValid = () => {
        if (gallons !== '' && date !== '') {
        setFormValid(true)
        }
    }

    const handleGallonsChange = (e) => {
        setGallons(e.target.value)
        handleCheckFormValid()
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
        handleCheckFormValid()
    }

    const handleGetQuote = async (e) => {
        e.preventDefault()
        await clientWithAuth(token)
        .get('/quote/' + username + '/' + gallons)
        .then((response) => {
            setQuote(response.data)
        })
        handleCheckFormValid()
    }

    const handleQuoteSubmit = async (e) => {
        e.preventDefault()
        if (FormValid === false) {
        alert('Please complete the form !!')
        return
        }
        // DEBUG
        console.log(gallons)
        console.log(date)
        await clientWithAuth(token)
        .post('/quote', {
            username,
            address1: profile.address1,
            address2: profile.address2,
            city: profile.city,
            state: profile.state,
            zipcode: profile.zipcode,
            gallons,
            date,
            price: quote.price,
            due: quote.due,
        })
        .then((response) => {})
        .catch((error) => {
            const status = error.response.status
            if (status === 400) {
            alert('Submission failed!')
            navigate('/quote')
            }
        })
        navigate('/history')
    }

    useEffect(() => {
        if (!token) {
        localStorage.clear()
        navigate('/login')
        } else {
        clientWithAuth(token)
            .get('/profile/' + username)
            .then((response) => {
            if (response.data.full_name === null) {
                navigate('/profile/edit')
            }
            setProfile(response.data)
            })
        }
    }, [])

    return (
        <div>
            <h1>Fuel Quote Form</h1>
            <form onSubmit={handleGetQuote}>
                <div id="grid-container">
                    <div id="grid-a">
                        <label for="fuelamount">Gallons Requested: </label>
                        <input type="number" name="fuelamount" placeholder='Enter Gallons of Fuel' min='1' onChange={handleGallonsChange} required/>
                    </div>
                    <div id = "grid-b" class="street">
                        <label for="street1">Street Address 1: </label>
                        <input type="text" name='delivery_address' placeholder='Address' value={profile.address1 + ', ' + profile.address2} readOnly/>
                    </div>
                    <div id = "grid-d">
                        <label for="city">City: </label>
                        <input type="text" name='delivery_city' placeholder='City' value={profile.city} readOnly/>
                    </div>
                    <div id = "grid-e">
                        <label for="state">State: </label>
                        <input type="text"  name='delivery_state' placeholder='State' value={profile.state} readOnly/>
                    </div>
                    <div id = "grid-f">
                        <label for="zip">ZIP: </label>
                        <input type="number" name='delivery_zipcode' placehoder='Zipcode' value={profile.zipcode} readOnly/>
                    </div>
                    <div id = "grid-g">
                        <label for="date">Delivery Date: </label>
                        <input type="date" name='delivery_date' min={new Date().toISOString().split('T')[0]} onChange={handleDateChange} required/>
                    </div>
                    <div id = "grid-h"><center><button className="center-button" type="submit" onSubmit={handleGetQuote}>Get Quote</button></center><br></br><br></br><br></br></div>
                </div>
            </form>
            <form id="grid-container" onSubmit={handleQuoteSubmit}>
                <div id = "grid-i">
                    <label for="">Sugg. Price Per Gallon: </label>
                    <input type='text' id='suggested_gallon_price' name='suggested_gallon_price' value={formatter.format(quote.price)} readOnly/>
                    </div>
                    <div id = "grid-j">
                        <label className='label' htmlFor='total_cost'>Total Amount Due: </label>
                        <input type='text' id='total_cost' name='total_cost' placeholder='$' value={formatter.format(quote.due)} readOnly />
                    </div>
                    <div id = "grid-k">
                        <center><button className="center-button" type='submit' onSubmit={handleQuoteSubmit}>Submit Quote</button></center>
                    </div>
            </form>
        </div>
    )
}