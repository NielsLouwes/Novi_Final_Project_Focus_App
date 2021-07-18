import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import './Nav.css';
import logo_three from '../files/—Pngtree—target aim archery focus _3657878.png'
import {useAuth} from "../contexts/AuthContext";

export default function Nav() {
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth()
    const history = useHistory()

     async function handleLogout () {
        setError("")

        try {
        await logout()
            history.push("/")
        } catch {
            setError  ("Failed to log out.")
        }
    }

    return (
        <nav className="header">
            <Link className="nav__text" to="/">
            <img width="100px" height="auto" className="header__logo" src={logo_three} alt="logo"/>
            </Link>

            <ul className="nav-links">
                {!currentUser &&
                <>
                    <li>
                        <Link className="nav__text" style={{ textDecoration: 'none' }} to="/"> HOME</Link>
                    </li>
                    <li>
                        <Link className="nav__text" style={{ textDecoration: 'none' }} to="/register">REGISTER</Link>
                    </li>


                    <li>
                    <Link className="nav__text" style={{ textDecoration: 'none' }} to="/signin">SIGN IN</Link>
                    </li>
                    </>

                }

                {currentUser &&
                <>
                    <li>
                        <Link className="nav__text" style={{ textDecoration: 'none' }} to="/"> Home</Link>
                    </li>
                    <button className="logOutButton" onClick={handleLogout}>
                        Sign Out
                    </button>
                    <li>
                        <Link className="nav__text" style={{textDecoration: 'none'}} to="/profile">Profile</Link>
                    </li>

                </>
                }

            </ul>
        </nav>
    );
}