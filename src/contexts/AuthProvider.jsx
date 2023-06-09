import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefs, setChefs]= useState([])
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = ()=>{
        setLoading(true)
        
      return  signInWithPopup(auth, gitHubProvider)
        
    }
    
    const logOut = () => {
        // console.log('aaaa')
        return signOut(auth);
    }

    const  manageUse =  (name, photo)=>{

        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])


    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-side-amber.vercel.app/chef')
        .then(res=>res.json())
        .then(result => setChefs(result))
    },[])
    

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        chefs,
        googleSignIn,
        gitHubSignIn,
        manageUse,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;