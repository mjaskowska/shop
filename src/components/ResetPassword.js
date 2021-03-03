import React, {useRef, useState} from 'react'
import './styles/Login/Login.css'
import {useAuth} from './contexts/AuthContext'
import {Link } from 'react-router-dom'

const ResetPassword = () => {
    const emailRef= useRef()
    const {resetPassword} = useAuth()
    const [authError, setAuthError] = useState('')
    const [authLoading, setAuthLoading] = useState(false)
    const [additionalInfo, setAdditionalInfo] = useState("")
    

     const handleSubmit = async (e) =>  {
        e.preventDefault()

       
        try {
            setAdditionalInfo("")
            setAuthError('')
            setAuthLoading(true)
            await resetPassword(emailRef.current.value)
            setAdditionalInfo('Check your inbox.')
            setAuthLoading(false)
            
        } catch {
            setAuthError('Failed to reset password. Try again.')
            setAuthLoading(false)
        }
        

        
    }

    return (
        <>
      
        <div className="login-container">
          <h2 className="login-title">Reset your password</h2>
       
          {authError && <p className="error-text">{authError}</p>}
          {additionalInfo && <p className="error-text">{additionalInfo}</p>}
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form">
                <label>Email</label>
                <input placeholder="Enter your email" required type="email" ref={emailRef}></input>
            </div>
                     
             <button disabled={authLoading} type="submit" className="main-btn">Reset Password</button>
             <Link to="/login"><button className="secondary-btn">Cancel</button></Link>
          </form>
               
          
        </div>
        <Link to="/register"><button className="secondary-btn">Don't have an account? Sign up</button></Link>
        
        </>
    )
}

export default ResetPassword
