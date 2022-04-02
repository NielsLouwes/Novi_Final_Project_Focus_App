import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import "./Profile.css";
import EditForm from "./EditForm";

export default function Profile() {
  // const emailRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [name, setName] = useState(window.localStorage.getItem("name" || ""));
  const [lastName, setLastName] = useState(
    window.localStorage.getItem("lastName" || "")
  );

  const [isEditing, setIsEditing] = useState(false);

  const editUser = () => {
    setIsEditing(true);
  };

  return (
    <div className="Profile">
      {error && <h2>{error}</h2>}
      {!isEditing ? (
        <form className="ProfileMain">
          <h2 className="profile-title">My profile </h2>
          <div className="name-container">
            <strong><label htmlFor="name">First Name: </label></strong>
            <p>{name}</p>
          </div>
          <div className="name-container">
            <strong><label htmlFor="lastName">Last Name: </label></strong>
             <p>{lastName}</p>
          </div>
          {currentUser ? (
            <div className="email-container">
            <label className="register__label" htmlFor="email">
              <strong className="register__label">Email:</strong>{" "}
            </label>
            <p className="email-p">{currentUser.email}</p> 
            </div>
          ) : (
            <Redirect to="/signin"> </Redirect>
          )}
          <button onClick={editUser} className="profile-button">
            Edit
          </button>
        </form>
      ) : (
        <EditForm isEditing={isEditing} />
      )}
    </div>
  );
}
