import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleClick = () => {
        loginWithRedirect();
    };

    return (
        <button 
            className="navBtn"
            onClick={handleClick}
        >
            Login
        </button>
    );
};

export default LoginButton;