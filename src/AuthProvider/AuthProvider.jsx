import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase';
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const provider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }

    }, [])

    const authData = {
        createUser,
        logoutUser,
        loginUser,
        user,
        loading,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;