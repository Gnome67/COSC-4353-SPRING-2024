import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { clientWithAuth } from '../axiosClient'
import "./Profile.css"

export default function Profile() {
    const [fullname, setFullname] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const navigate = useNavigate()

  const handleChangeName = (e) => {
    setFullname(e.target.value)
  }

  const handleChangeAddress1 = (e) => {
    setAddress1(e.target.value)
  }

  const handleChangeAddress2 = (e) => {
    setAddress2(e.target.value)
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }

  const handleChangeState = (e) => {
    setState(e.target.value)
  }

  const handleChangeZipcode = (e) => {
    setZipcode(e.target.value)
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    await clientWithAuth(token)
      .post('/profile/edit', {
        username,
        fullname,
        address1,
        address2,
        city,
        state,
        zipcode,
      })
      .then((response) => {})
      .catch((error) => {
        const status = error.response.status
        if (status === 400) {
          alert('Submission failed!')
          navigate('/profile/edit')
        }
      })

    navigate('/')
  }
    
    
    useEffect(() => {
        const validStates = [
            "AL", "AK", "AZ", "AR", "CA",
            "CO", "CT", "DE", "FL", "GA",
            "HI", "ID", "IL", "IN", "IA",
            "KS", "KY", "LA", "ME", "MD",
            "MA", "MI", "MN", "MS", "MO",
            "MT", "NE", "NV", "NH", "NJ",
            "NM", "NY", "NC", "ND", "OH",
            "OK", "OR", "PA", "RI", "SC",
            "SD", "TN", "TX", "UT", "VT",
            "VA", "WA", "WV", "WI", "WY"
        ];
    
        const inputElement = document.getElementById("stateInput");
    
        const handleInput = (e) => {
            const inputValue = inputElement.value.trim().toLowerCase();
            const isValid = validStates.map(state => state.toLowerCase()).includes(inputValue);
            const validationMessage = isValid ? "" : "Invalid state initials";
            if(isValid)
                setState(e.target.value);
            document.getElementById("stateValidationMessage").textContent = validationMessage;
            inputElement.setCustomValidity(validationMessage);
        };
    
        inputElement.addEventListener("input", handleInput);
    
        return () => {
          inputElement.removeEventListener("input", handleInput);
        };

        
    }, []);

  return (
    <div id="profileForm">
        <form className="form-wrapper" onSubmit={handleProfileSubmit}>
            <div className="form-container">
            <h1 id="title">Profile Customization</h1>
                <div className="input">
                    <label className="text-label">Full Name <span className="required">&#42;</span></label>
                    <input className="text" id="full_name" type="text" name="full_name" 
                           placeholder="Enter Full Name" maxlength="50" 
                           onChange={handleChangeName}
                           required/>
                </div>
                <div className="input">
                    <label className="text-label">Address 1 <span className="required">&#42;</span></label>
                    <input className="text" id="address1" type="text" name="address1" 
                           placeholder="Street Name/Address" maxlength="50" 
                           onChange={handleChangeAddress1}
                           required/>
                </div>
                <div className="input">
                    <label className="text-label">Address 2</label>
                    <input className="text" id="add2" type="text" name="address2" 
                           placeholder="Apt Number" maxlength="50"
                           onChange={handleChangeAddress2}/>
                </div>
                <div className="location-container">
                    <div className="input-city">
                        <label className="text-label">City <span className="required">&#42;</span></label>
                        <input className="text" id="city" type="text" name="city" 
                               placeholder="City" maxlength="20" 
                               onChange={handleChangeCity}
                               required/>
                    </div>
                    <div className="input">
                        <label className="text-label">State Initials<span className="required">&#42;</span></label>
                        <input className="text" id="stateInput" type="text" name="state" 
                               placeholder="State Initials" maxlength="2" 
                               onChange={handleChangeState}
                               required/>
                        <span id="stateValidationMessage" style={{ color: 'red' }}></span>
                    </div>
                    <div className="input">
                        <label className="text-label">Zip Code <span className="required">&#42;</span></label>
                        <input className="text" id="zipcode" type="text" name="zipcode" 
                               placeholder="Zip Code (5 digits)" pattern="[0-9]{5}" maxlength="7"
                               onChange={handleChangeZipcode}
                               required/>
                    </div>
                </div>
                    <div className="button-wrapper">
                        <button className="submit-button" onSubmit={handleProfileSubmit}>Confirm Changes</button>
                    </div>
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

