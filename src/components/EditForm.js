import React , {useEffect, useState} from "react";
import { Redirect,  useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 25vh;
  width: 20%;
  border: 2px solid #333333;
  border-radius: 15px;
  div {
    margin-top: 25px;
  }

  label {
    background: white;
  }

  input {
    padding-left: 10px;
    background-color: white;
  }

`;

const Button = styled.button`
  width: 35%;
  margin-left: 85px;
  margin-top: 50px;
  width: 30%;
  margin-top: 25px;
  border-radius: 15px;
  margin-left: 32%;
  padding: 5px;
`;

function EditForm({ isEditing, setIsEditing}) {
  const history = useHistory();
    const [name, setName] = useState(window.localStorage.getItem("name" || ""));
  const [lastName, setLastName] = useState(
    window.localStorage.getItem("lastName" || "")
  );
 

  const handleClick = () => {
    setIsEditing(false);
    history.push("/profile");
  };

  useEffect(() => {
    window.localStorage.setItem("name", name);
  });

  useEffect(() => {
    window.localStorage.setItem("lastName", lastName);
  });

  const handleChange = (event) => setName(event.target.value);
  const handleChange2 = (event) => setLastName(event.target.value);

  return (
    <StyledWrapper>
      <Form>
        <div className="name-container">
            <label htmlFor="name">First Name: </label>
            <input value={name} onChange={handleChange} id="name" />
          </div>
          <div className="name-container">
            <label htmlFor="lastName">Last Name: </label>
            <input value={lastName} onChange={handleChange2} id="lastName" />
          </div>
        <Button onClick={handleClick} type="submit">
          Save
        </Button>
      </Form>
    </StyledWrapper>
  );
}

export default EditForm;
