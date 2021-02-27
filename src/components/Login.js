import React, {useRef, useState} from 'react'
import './styles/Login/Login.css'
import {useAuth} from './contexts/AuthContext'
import {Link, useHistory } from 'react-router-dom'

const Login = () => {
    const emailRef= useRef()
    const passwordRef= useRef()
    const {login, currentUser} = useAuth()
    const [authError, setAuthError] = useState('')
    const [authLoading, setAuthLoading] = useState(false)
    const history = useHistory()

     const handleSubmit = async (e) =>  {
        e.preventDefault()

       
        try {
            setAuthError('')
            setAuthLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setAuthError('Failed to log in. Try again.')
        }
        setAuthLoading(false)

        
    }

    return (
        <>
      
        <div className="login-container">
          <h2 className="login-title">Log In</h2>
        <p>{currentUser}</p>
          {authError && <p className="error-text">{authError}</p>}
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form">
                <label>Email</label>
                <input placeholder="Enter your email" required type="email" ref={emailRef}></input>
            </div>
            <div className="form">
                <label>Password</label>
                <input placeholder="Enter your password"  required type="password" ref={passwordRef}></input>
            </div>
            
             <button disabled={authLoading} type="submit" className="login-btn">Log In</button>
          </form>
               
          
        </div>
        <Link to="/register"><button className="resetpassword-btn">Don't have an account? Sign up</button></Link>
        
        </>
    )
}

export default Login
