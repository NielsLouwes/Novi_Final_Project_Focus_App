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

  useEffect(() => {
    window.localStorage.setItem("name", name);
  });

  useEffect(() => {
    window.localStorage.setItem("lastName", lastName);
  });

  const handleChange = (event) => setName(event.target.value);
  const handleChange2 = (event) => setLastName(event.target.value);

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
            <label htmlFor="name">First Name: </label>
            <input value={name} onChange={handleChange} id="name" />
          </div>
          <div className="name-container">
            <label htmlFor="lastName">Last Name: </label>
            <input value={lastName} onChange={handleChange2} id="lastName" />
          </div>
          {currentUser ? (
            <label className="register__label" htmlFor="email">
              <strong className="register__label">Email:</strong>{" "}
              {currentUser.email}
            </label>
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
