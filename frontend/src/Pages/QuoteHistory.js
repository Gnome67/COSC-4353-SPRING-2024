import React from 'react'
import {Link} from 'react-router-dom';
import "./QuoteHistory.css"

// Message from Raian: Feel free to remove the <p> tag, but keep the <div> and have 
// all your html needs to be inside that <div> tag, you can add an id or className if you need it
// You can remove these comments too :) hey

export default function QuotePage() {
    return (
        <div>
            <h1>Quote History</h1>
            <table className='quoteTable'>
                <thead>
                    <tr>
                        <th className='quoteHeader'>Quote ID</th>
                        <th className='quoteHeader'>Customer</th>
                        <th className='quoteHeader'>Gallons Requested</th>
                        <th className='quoteHeader'>Delivery Address</th>
                        <th className='quoteHeader'>Delivery Date</th>
                        <th className='quoteHeader'>Suggested Price</th>
                        <th className='quoteHeader'>Total Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='quoteData'>1</td>
                        <td className='quoteData'>Taha Amir</td>
                        <td className='quoteData'>5</td>
                        <td className='quoteData'>251 Green Street</td>
                        <td className='quoteData'>2024-02-20</td>
                        <td className='quoteData'>$3</td>
                        <td className='quoteData'>2024-02-20</td>
                    </tr>
                    {/* More Rows */}
                </tbody>
            </table>
        </div>
    )
}