import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Redirect } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const emailRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <div className="Profile">
      {error && <h2>{error}</h2>}
      <form className="ProfileMain">
        <h2 className="profile-title">My profile </h2>
        <p className="profile-text">First Name: </p>
        <p className="profile-text">Last Name: </p>
        {currentUser ? (
          <label className="register__label" htmlFor="email">
            <strong className="register__label">Email:</strong>{" "}
            {currentUser.email}
          </label>
        ) : (
          <Redirect to="/signin"> </Redirect>
        )}
        <button className="profile-button">Edit</button>
      </form>
    </div>
  );
}
