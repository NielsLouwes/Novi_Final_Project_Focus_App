import React, {useRef, useState} from "react";
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom";
import "./Profile.css"


export default function Profile() {

    const emailRef = useRef()
    const {currentUser} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit (e) {
        // e.preventDefault()
        //
        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError("Password do not match.")
        // }
        //
        // try {
        //     setError("")
        //     setLoading(true)
        //     await signup(emailRef.current.value, passwordRef.current.value)
        //     history.push("/signin")
        // } catch {
        //     setError("Failed to create an account.")
        // }
        // setLoading(false)
    }

    return (
        <div>
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit} className="ProfileMain" >
                <h2 className="form-title">My profile </h2>
                <label className="register__label" htmlFor="email"><strong>Email:</strong> {currentUser.email}</label>
            </form>
        </div>
    );
}
