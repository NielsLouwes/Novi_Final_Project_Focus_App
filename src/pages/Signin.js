import React, {useRef, useState} from "react";
import "./Register.css"
import {
    Link, useHistory
} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit (e) {
        e.preventDefault()


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Wrong password.")
        }
        setLoading(false)
    }



    return (
        <div>
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit} className="form-main" >
                <h2 className="form-title">Sign In </h2>
                <label className="register__label" htmlFor="email">Email</label>
                <input className="register__input"  type="email"ref={emailRef}/>

                <label className="register__label"   htmlFor="password">Password</label>
                <input className="register__input"    type="password" ref={passwordRef}/>

                <button className="register__button" disabled={loading} type="submit">Log In</button>
                <p className="register__text">Don't have an account? <Link to="/register">Create New Account</Link></p>
            </form>
        </div>
    );
}