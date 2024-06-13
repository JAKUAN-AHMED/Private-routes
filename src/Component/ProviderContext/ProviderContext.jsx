import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null);
const ProviderContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);
    const provider=new GoogleAuthProvider();
    const CreateUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //sign out
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    //observe auth state change
    useEffect(()=>{
        const Unsubscribe=onAuthStateChanged(auth,CurrentUser=>{
            setUser(CurrentUser);
            setLoading(false);
            console.log("observing current user",CurrentUser);
        })
        return ()=>{
            Unsubscribe();
        }
    },[]);
    const authInfo={
        user,
        CreateUser,
        SignInUser,
        logOut,
        loading,
        signInGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
ProviderContext.propTypes={
    children:PropTypes.node
}
export default ProviderContext;