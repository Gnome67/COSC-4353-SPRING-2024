import { React, useEffect, useState } from 'react'
import { clientWithAuth } from '../axiosClient'
import { useNavigate } from 'react-router-dom'
import "./QuoteHistory.css"

// Message from Raian: Feel free to remove the <p> tag, but keep the <div> and have 
// all your html needs to be inside that <div> tag, you can add an id or className if you need it
// You can remove these comments too :) hey

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export default function QuotePage() {
    const navigate = useNavigate();
    const [ quotes, setQuotes ] = useState([]);
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if (!username || !token) {
        navigate('/login');
    }
    useEffect(() => {
        clientWithAuth(token).get('/history/'+username).then((response) => {
        console.log(response.data.quotes);
        setQuotes(response.data.quotes);
        }).catch((error) => {
        if (error.response && error.response.status === 400)
        {
            navigate('/login');
        }
        alert('Please login, if logged in, server may be down.');
        navigate('/');
        });
    }, [])
    return (
        <div>
            <h1>Quote History</h1>
            <table className='quoteTable'>
                <thead>
                    <tr>
                        <th className='quoteHeader'>Delivery Date</th>
                        <th className='quoteHeader'>Gallons Requested</th>
                        <th className='quoteHeader'>Address</th>
                        <th className='quoteHeader'>City</th>
                        <th className='quoteHeader'>State</th>
                        <th className='quoteHeader'>Zip Code</th>
                        <th className='quoteHeader'>Price per Gallon</th>
                        <th className='quoteHeader'>Total Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className='quoteData'>{val.date}</td>
                            <td className='quoteData'>{val.gallons}</td>
                            <td className='quoteData'>{val.address}</td>
                            <td className='quoteData'>{val.city}</td>
                            <td className='quoteData'>{val.state}</td>
                            <td className='quoteData'>{val.zipcode}</td>
                            <td className='quoteData'>{formatter.format(val.price)}</td>
                            <td className='quoteData'>{formatter.format(val.due)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}