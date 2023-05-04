import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    

    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
       signInWithPopup(auth, googleProvider)
       .then(() => {})
       .catch(error => {
        
       })
    }

    const githubProvider = new GithubAuthProvider()

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
       .then(() => {})
       .catch(error => {
        
       })
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, correntUser => {
            setUser(correntUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}