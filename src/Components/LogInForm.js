import React from 'react';
import logo from "./logo.png";

export default function LogInForm() {
    return (
        <>
        <div className = "sideBar">
        <img src={logo} className="logo" alt="logo" />
        </div>
        <div className = "logInForm">
            <form >
                <input type = "text" placeholder = "Email/Username *" required = "true"/> <br/>
                <input type = "password" placeholder = "Password" required = "true" className = "passward" id= "passward"/> <br/><br/>

                <button className = "button">Log In</button>
            </form>
        </div>

        </>
    )
}
