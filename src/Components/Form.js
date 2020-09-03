// importing react & css
import React from 'react';
import "./index.css";

export const Form = () => {
    return (
        <div className ="form">
            {/* craeting input fields for the sign up form */}
            <form>

        <h1>Sign Up Here</h1>

                {/* <label>Firstname :</label> */}
                 <input type = "text" required = "true" placeholder = "First Name *" id = "firstName" className = "firstName" height = "25px" width = "100px"  ></input>
                {/* <label>Lastname :</label> */}
                <input type = "text" required = "true" placeholder = "Last Name *" id = "lastName" className = "lastName" />
                <br/>
                {/* <label>Username :</label> */}
                <input type = "text" required = "true" placeholder = "Username *" id = "name" className = "name" />
                <input type = "integer" required = "true" placeholder = "Phone Number *" id = "phone" className = "phone" /><br/>
                {/* <label>Email :</label> */}
                <input type = "email" required = "true" placeholder = "Email *" id = "email" className = "email" />
                <input type = "email" required = "true" placeholder = "Confirm Email *" id = "confirmEmail" className = "confirmEmail" /><br/>
            
                <input type = "password" required = "true" placeholder = "Password *" id = "password" className = "password" />

                <input type = "password" required = "true" placeholder = "Confirm Password *" id = "confirmPassword" className = "confirmPassword" /><br/>
                 
                <div className = "radio">
                <label>Male</label> <input type = "radio" className = "male" value = "gender"/>
                <label> Female</label> <input type = "radio" className = "female" value = "gender"/> <br/>
                </div>

                <input type="button" className="button" value="Sign Up"/>

        </form>
            
        </div>
    )
}
 export default Form;