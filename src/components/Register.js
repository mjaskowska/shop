import React, {useRef, useState} from "react";
import {useAuth} from './contexts/AuthContext'
import {Link, useHistory } from 'react-router-dom'

const Register = () => {
    const emailRef= useRef()
    const passwordRef= useRef()
    const confirmPasswordRef= useRef()
    const {signup} = useAuth()
    const [authError, setAuthError] = useState('')
    const [authLoading, setAuthLoading] = useState(false)
    const history = useHistory()

     const handleSubmit = async (e) =>  {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value){
            return setAuthError("passwords do not match")
        }
        try {
            setAuthError('')
            setAuthLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setAuthError('failed to create an account')
        }
        setAuthLoading(false)
  
    }

  return (
      <>
      
    <div className="register-container">
      <h2 className="login-title">Create an account</h2>
     
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
        <div className="form">
            <label>Confirm Password</label>
            <input placeholder="Repeat your password" required type="password" ref={confirmPasswordRef}></input>
         </div>
         <button disabled={authLoading} type="submit" className="login-btn">Create an account</button>
      </form>
           
      
    </div>
    <Link to="/login"><button className="resetpassword-btn">Already have an account? Log In</button></Link>
    
    </>
  );
};

export default Register;
