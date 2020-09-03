import React from 'react';
import logo from "./logo.png";

export const Welcome = () => {
    return (
        <div className = "Welcome">
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
};

export default Welcome;
