import React, {useRef, useState} from "react";
import "./Register.css"
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom";


export default function Register() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit (e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match.")
        }

        try {
            setError("")
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/signin")
        } catch {
            setError("Failed to create an account.")
        }
        setLoading(false)
    }


    return (
        <div>
            {error && <h2>{error}</h2>}
        <form onSubmit={handleSubmit} className="form-main" >
        <h2 className="form-title">Register </h2>
            <label className="register__label" htmlFor="email">Email</label>
            <input className="register__input"  type="email"ref={emailRef}/>

            <label className="register__label"   htmlFor="password">Password</label>
            <input className="register__input"    type="password" ref={passwordRef}/>

            <label className="register__label"     htmlFor="password">Confirm Password</label>
            <input className="register__input"   type="password" ref={passwordConfirmRef}/>

            <button className="register__button" disabled={loading} type="submit">Create Account</button>
            <p className="register__text">Already have an account? <Link to="/signin"> Sign In</Link></p>
        </form>
        </div>
    );
}

