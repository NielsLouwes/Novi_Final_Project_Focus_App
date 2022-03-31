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
  background-color: purple;
  height: 25vh;
  width: 20%;
  border-radius: 15px;
`;

const Button = styled.button`
  width: 35%;
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
          Edit{" "}
        </Button>
      </Form>
    </StyledWrapper>
  );
}

export default EditForm;
