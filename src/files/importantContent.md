## REACT HOOK FORM CONTENT SIGNIN

<div className="signIn__container">
            {/*{errors.email && (*/}
            {/*    <span>{errors.email.message}</span>*/}
            {/*)}*/}
            {formState.isSubmitSuccessful && (
                <span>Check your email to complete login</span>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title">Sign In </h2>
                <div>
                    <label htmlFor="email" className="signIn__label">  Email Address</label>
                    <input className="signIn__input" type="text" ref={register()}  placeholder="JohnDoe@test.nl" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                </div>

                <div>
                    <label className="signIn__label"> Password</label>
                    <input className="signIn__input" type="password" placeholder="Password" {...register("Password", {required: true, max: 30, min: 6})} />
                </div>

                <button
                    type="submit"
                    // isLoading={formState.isSubmitting}
                >
                    Submit
                </button>
                <div>
                    <label> Dont have an account?, Register</label>
                </div>


## REACT HOOK FORM REGISTER

 <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">Register </h2>
            {/*<div>*/}
            {/*    <label className="register__label">Full Name</label>*/}
            {/*    <input className="register__input" type="text" placeholder="John Doe" {...register("Full Name", {required: true})} />*/}
            {/*</div>*/}

            <div>
                <label className="register__label">  Email Address</label>
                <input className="register__input" type="text"  placeholder="JohnDoe@test.nl" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            </div>

            <div>
                <label className="register__label"> Password</label>
                <input className="register__input" type="password"   placeholder="Password" {...register("Password", {required: true, max: 30, min: 6})} />

            </div>
            <div>
                <label className="register__label">Confirm Password</label>
            <input  className="register__input" type="password"  placeholder="Retype your password" {...register("Confirm Password", {required: true, max: 30, min: 6})} />
            </div>

            <input type="submit" />
            <div>
                <label> Already a member?, Log in</label>

            </div>

        </form>

## authcontext old

import React, {useContext, useState, useEffect, createContext}  from "react";
import firebase from "firebase/app";
import 'firebase/auth'


firebase.initializeApp({
apiKey: 'AIzaSyDNuY-FS_7AZorOW5IXSX8IZCQRr2Djf1A',
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
appID: process.env.REACT_APP_FIREBASE_APP_ID
})

const AuthContext = createContext();

export const useAuth = () => {
return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [isAuthenticating, setIsAuthenticating] = useState(true);


    const sendSignInLinkToEmail = email => {
        return firebase
            .auth()
            .sendSignInLinkToEmail(email, {
                url: 'http://localhost:3000/signin',
                handleCodeInApp: true,
            })
            .then(() => {
                return true;
            });
    };

    const signInWithEmailLink = (email, code) => {
        return firebase
            .auth()
            .signInWithEmailLink(email, code)
            .then(result => {
                setUser(result.user);
                return true;
            });
    };

    const logout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            setIsAuthenticating(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const values = {
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout,
    };

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );
};


