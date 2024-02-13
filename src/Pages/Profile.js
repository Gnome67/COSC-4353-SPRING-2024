import React from 'react'
import "./Profile.css"

export default function Profile() {
  return (
    <div id="profileForm">
        <h1 id="title">Profile Customization</h1>
        <form>
                <div className="field">
                    <label>Full Name</label>
                    <input id="text" type="text" name="first name" size="30" maxlength="50" required/>
                </div>


                <div className="field">
                    <label>Address Line 1</label>
                    <input id="text" type="text" name="address 1" size="30" maxlength="100" required/>
                    <label>Address Line 2</label>
                    <input id="text" type="text" name="address 2" size="30" maxlength="100" />
                </div>

                <div class="field">
                    <label>City</label>
                    <input id="text" type="text" name="city" size="30" maxlength="30" required/>
                    <label>State</label>
                    <th class="leftInput"><select name="state" required>
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
                    </th>

                    <label>Zip Code</label>
                    <th class="leftInput"><input id="text" type="text" name="zip" size="11" maxlength="9" minlength="5" required/></th>
                </div>

            <table id="button">
                <tr>
                    <label><input type="reset" name="clear/reset" value="Reset" id="resetButton" /></label>
                    <label><input type="submit" name="submit" value="Submit" id="submitButton" /></label>
                </tr>
            </table>
        </form>
    </div>
  )
}

