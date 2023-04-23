import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    const logOut = () =>{
       return signOut(auth);
    } 

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change', currentUser)
            setUser(currentUser); 
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;