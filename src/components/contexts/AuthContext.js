import React, {useState, useEffect, useContext} from 'react'
import {auth} from '../../firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [isVeryfing, setIsVeryfing] = useState(true)


    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email,password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logout = () => {
        auth.signOut()
    }

    useEffect(()=>{
        const unsubsribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setIsVeryfing(false)
            
        })
        return unsubsribe;
    },[])
   

    const value = {
        currentUser,
        signup,
        login,
    logout
    }



    return (
        <AuthContext.Provider value={value}>
            {!isVeryfing && children}
        </AuthContext.Provider>
    )
}


