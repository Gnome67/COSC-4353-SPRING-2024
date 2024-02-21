import React from 'react'
import {Link} from 'react-router-dom';
import "./fuelQuoteForm.css"

export default function FuelQuoteForm() {
    return (
        <div>
            <h1>Fuel Quote Form</h1>
            <form method="POST" action="">
                <div id="grid-container">
                    <div id="grid-a">
                        <label for="fuelamount">Gallons Requested: </label>
                        <input type="number" name="fuelamount" required/>
                    </div>
                    <div id = "grid-b" class="street">
                        <label for="street1">Street Address 1: </label>
                        <input type="text" name="street1" required readonly value ="4401 Cougar Village Dr"/>
                    </div>
                    <div id = "grid-c" class="street">
                        <label for="street2">Street Address 2: </label>
                        <input type="text" name="street2" readonly value = "NT #0310"/>
                    </div>
                    <div id = "grid-d">
                        <label for="city">City: </label>
                        <input type="text" name="city" value = "Houston" required readonly/>
                    </div>
                    <div id = "grid-e">
                        <label for="state">State: </label>
                        <input type="text" name="state" pattern = "[A-Z][A-Z]" value = "TX" required readonly/>
                    </div>
                    <div id = "grid-f">
                        <label for="zip">ZIP: </label>
                        <input type="number" name="zip" pattern = "[0-9][0-9][0-9][0-9][0-9]" value="77204" required readonly/>
                    </div>
                    <div id = "grid-g">
                        <label for="date">Delivery Date: </label>
                        <input type="date" name="date" required/>
                    </div>
                    <div id = "grid-h"></div>
                    <div id = "grid-i">
                        Suggested Price/Gallon: $50
                    </div>
                    <div id = "grid-j">
                        Total Amount Due: $$$
                    </div>
                    <div id = "grid-k">
                        <input type="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}