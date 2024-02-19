import React from 'react'
import {Link} from 'react-router-dom';
import "./Profile.css"

export default function Profile() {
  return (
    <div id="profileForm">
        <h1 id="title">Profile Customization</h1>
        <form className="form-wrapper">
            <div className="form-container">
                <div className="input">
                    <label className="text-label">Full Name</label>
                    <input className="text" type="text" name="Full Name" placeholder="Enter Full Name" maxlength="50" required/>
                </div>
                <div className="input">
                    <label className="text-label">Address 1</label>
                    <input className="text" type="text" name="Address 1" placeholder="Street Name/Address" maxlength="50" required/>
                </div>
                <div className="input">
                    <label className="text-label">Address 2</label>
                    <input className="text" type="text" name="Address 2" placeholder="Apt Number" maxlength="50" required/>
                </div>
                <div className="location-container">
                    <div className="input-city">
                        <label className="text-label">City</label>
                        <input className="text" type="text" name="City" placeholder="City" maxlength="20" required/>
                    </div>
                    <div className="input">
                        <label className="text-label">State</label>
                        <input className="text" type="text" name="State" placeholder="State" maxlength="15" required/>
                    </div>
                    <div className="input">
                        <label className="text-label">Zip Code</label>
                        <input className="text" type="text" name="Zip Code" placeholder="Zip Code" maxlength="7" required/>
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <button id="submit-button">Confirm Changes</button>
            </div>
        </form>
    </div>
  )
  
}

/* 
<div id="wrapper">
                <div className="field">
                    <th><label id="inputLabel">Full Name</label></th>
                    <input className="text" type="text" name="first name" size="90" maxlength="50" required/>
                </div>


                <div className="field">
                    <th><label>Address Line 1</label></th>
                    <input className="text" type="text" name="address 1" size="90" maxlength="100" required/>
                </div>
                <div className="field">
                    <th><label>Address Line 2</label></th>
                    <input className="text" type="text" name="address 2" size="90" maxlength="100" />
                </div>

                <div className="loactionDiv">
                    <div class="smallerField">
                        <th><label>City</label></th>
                        <input className="text" type="text" name="city" size="30" maxlength="30" required/>
                    </div>
                    <div class="custom-field">
                        <th><label>State</label></th>
                        <select name="state" required>
                                <option selected="" value="Default">Please select a state</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                    
                    </div>
                    <div class="smallerField">
                        <th><label>Zip Code</label></th>
                        <input className="text" type="text" name="zip" size="11" maxlength="9" minlength="5" required/>
                    </div>
                </div>
            </div>
            <table id="button">
                <tr>
                    <label><input type="reset" name="clear/reset" value="Reset" id="resetButton" /></label>
                    <label><input type="submit" name="submit" value="Submit" id="submitButton" /></label>
                </tr>
            </table>
*/

