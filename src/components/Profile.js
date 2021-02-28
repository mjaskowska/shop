import React, {useState} from 'react'
import {useAuth} from './contexts/AuthContext'
import {Link, useHistory } from 'react-router-dom'


const Profile = () => {
    const {currentUser, logout} = useAuth()
    const [logOutError, setLogOutError] = useState("") 
    const history = useHistory()

const handleLogout = async () => {
        setLogOutError('')

        try {
            await logout()
            history.push("/")
        }
        catch {
            setLogOutError("Failed to log out. Try again.")
        }
    }

    return (
        
        <div className="profile-container">
          <h2 className="login-title">Profile</h2>
       
          {logOutError && <p className="error-text">{logOutError}</p>}
          <p className="email-text">Email: {currentUser.email}</p>
          
          <Link to="change-password">
          <button className="secondary-btn btn-left">Change Password</button>
          </Link>
          

          <button onClick={handleLogout} className="secondary-btn btn-left">Log Out</button>
               
          
        </div>
    )
}

export default Profile
