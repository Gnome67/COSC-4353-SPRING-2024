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
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Customer</th>
                        <th>Gallons Requested</th>
                        <th>Delivery Address</th>
                        <th>Delivery Date</th>
                        <th>Suggested Price</th>
                        <th>Total Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Taha Amir</td>
                        <td>5</td>
                        <td>251 Green Street</td>
                        <td>2024-02-20</td>
                        <td>$3</td>
                        <td>2024-02-20</td>
                    </tr>
                    {/* More Rows */}
                </tbody>
            </table>
        </div>
    )
}