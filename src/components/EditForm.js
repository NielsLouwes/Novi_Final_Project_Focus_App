import React from "react";
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
`;

const Button = styled.button`
  width: 35%;
`;
function EditForm({ isEditing, setIsEditing }) {
  const history = useHistory();
  // const [isEditing, setIsEditing] = useState(true)

  const handleClick = () => {
    setIsEditing(false);
    history.push("/profile");
  };

  return (
    <StyledWrapper>
      <Form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" name="firstname" />
        <Button onClick={handleClick} type="submit">
          Edit{" "}
        </Button>
      </Form>
    </StyledWrapper>
  );
}

export default EditForm;
