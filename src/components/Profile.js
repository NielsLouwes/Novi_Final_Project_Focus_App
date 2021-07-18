import React, {useRef, useState} from "react";
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory, Redirect} from "react-router-dom";
import "./Profile.css"


export default function Profile() {

    const emailRef = useRef()
    const {currentUser} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit (e) {

    }

    return (
        <div className="Profile">
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit} className="ProfileMain" >
                <h2 className="profile-title">My profile </h2>
                {currentUser ?  <label className="register__label" htmlFor="email"><strong>Email:</strong> {currentUser.email}</label> : <Redirect to="/signin"> </Redirect> }

            </form>
        </div>
    );
}
