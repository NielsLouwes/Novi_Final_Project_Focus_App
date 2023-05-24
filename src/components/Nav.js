import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo_three from "../files/image.png";
// import { useAuth } from "../contexts/AuthContext";

export default function Nav() {

  return (
    <nav className="header">
      <Link className="nav__text" to="/">
        <img
          width="auto"
          height="500px"
          className="header__logo"
          src={logo_three}
          alt="logo"
        />
      </Link>

      <ul className="nav-links">
          <>
            <li>
              <Link
                className="nav__text"
                style={{ textDecoration: "none" }}
                to="/"
              >
                {" "}
                HOME
              </Link>
            </li>   
          </> 
      </ul>
    </nav>
  );
}
