import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeAuthentication from './firebase.init';
initializeAuthentication()
const useFirebase = () => {
    const [user, setuser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //google
    const googleLogin = (location, history) => {
        setLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                history.replace('/')

            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))


    }
    const signInUser = (email, password, name,location, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setuser(newUser)

                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                      
                    }).catch((error) => {
                       
                    });
                    const destination = location?.state?.form || '/'
                    history.replace(destination)


            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    const loginuser = (email, password, location, history) => {
        setLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
             
                history.replace('/')

                setError('')

            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(() => setLoading(false))

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)
            } else {
                setuser({})
            }

            setLoading(false)

        });
        return () => unsubscribe
    }, [])
    const logOut = () => {
        setLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)

        })
            .finally(() => setLoading(false))

    }

    return {
        user,
        signInUser,
        loginuser,
        logOut,
        loading,
        error,
        googleLogin
    }

};

export default useFirebase;