import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import "./Profile.css";
import EditForm from "./EditForm";

export default function Profile() {
  // const emailRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [user, setUser] = useState({ firstname: "", lastname: "" });
  const [isEditing, setIsEditing] = useState(false);

  let user2 = ["Niels", "Louwes"];
  // const editUser2 = () => {
  //   let userInput = prompt("Enter your first name");
  //   setUser({ ...user, firstname: userInput });
  // };

  const editUser = () => {
    setIsEditing(true)
  }

  // if isEditing, show edit form , edit form updates the state

  console.log(user);
  return (
    <div className="Profile">
      {error && <h2>{error}</h2>}
      {!isEditing ? (
        <form className="ProfileMain">
          <h2 className="profile-title">My profile </h2>
          <p className="profile-text">First Name: {user.firstname}</p>
          <p className="profile-text">Last Name: {user.lastname} </p>
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
      ) : <EditForm isEditing={isEditing} />}
    </div>
  );
}
