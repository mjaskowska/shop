import React from 'react'
import './styles/Login/Login.css'

const Login = () => {
    return (
        <div className="container">
            <h1 className="login-title">Log In</h1>
            <form>
                <label>Email</label>
                <input type="email"></input>
                <label>Password</label>
                <input type='password'></input>
            </form>
            <button className="login-btn">Log In</button>
            <button className="resetpassword-btn">Forgot Password?</button>
            
        </div>
    )
}

export default Login
