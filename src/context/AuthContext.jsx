import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    
    const signUp = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        return signOut(auth);
    }

    const resetPassword = async (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp,
        login,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
        
    )
}
