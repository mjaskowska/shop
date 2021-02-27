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
          {/* <p>Email: {currentUser.email}</p> */}
          <p>Email: blabla</p>
          <Link to="change-password">
          <button>Change Password</button>
          </Link>
          

          <button onClick={handleLogout}>Log Out</button>
               
          
        </div>
    )
}

export default Profile
