import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  // const emailRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const [user, setUser] = useState([
    "Niels", "Louwes"
  ])
  // setUser("Bob", "Hope");

  let user2 = ["Niels", "Louwes"];
  // 1. Need to update user state with edit button
  // 2. Need to push firstName and lastName to the userState
  //3. What about editing it after?
  // const editUser = () => {
    // let userInput = prompt("Enter your first name");
  //   return []
  // }

  //function takes userInput
  //setter spreads the user, then adds another array with the input.
  const editUser2 = () => {
    let userInput = prompt("Enter your first name");
    setUser([...user, [userInput]])
  }
  
  console.log(user);
  return (
    <div className="Profile">
      {error && <h2>{error}</h2>}
      <form className="ProfileMain">
        <h2 className="profile-title">My profile  </h2>
        <p className="profile-text">First Name: {user[0]}</p>
        <p className="profile-text">Last Name: {user[1]} </p>
        {currentUser ? (
          <label className="register__label" htmlFor="email">
            <strong className="register__label">Email:</strong>{" "}
            {currentUser.email}
          </label>
        ) : (
          <Redirect to="/signin"> </Redirect>
        )}
        <button onClick={editUser2} className="profile-button">Edit</button>
      </form>
    </div>
  );
}
