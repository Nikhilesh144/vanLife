import React from "react";
export default function Login(){
    return(
        <div className="Login">
            <h2>Sign in to your account</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
            <p>Don't have an account? <span> create one now</span></p>
        </div>
    )
}