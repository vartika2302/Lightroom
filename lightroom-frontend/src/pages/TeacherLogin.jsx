import styled from "styled-components";
import { Link } from "react-router-dom";

const TeacherLoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const TeacherLoginLeft = styled.div`
  flex: 1;
`;

const TeacherLoginLeftWrapper = styled.div`
  background-color: #f1cdd7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const TeacherLogo = styled.h1`
  align-self: flex-start;
  margin-left: 4rem;
  font-family: "Sacramento", cursive;
  color: #86566c;
  font-size: 2.2rem;
`;

const TeacherLoginImage = styled.img`
  width: 100%;
`;

const TeacherLoginRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterPara = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
`;

const TeacherLoginRightWrapper = styled.div`
  width: 40%;
  height: 40vh;
`;

const TeacherLoginHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const TeacherLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const TeacherLoginItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  height: 30px;
  margin-top: 0.5rem;
  outline-color: #76ba99;
`;

const TeacherLoginBtn = styled.button`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #76ba99;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  width: 200px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

function TeacherLogin() {
  return (
    <TeacherLoginContainer>
      <TeacherLoginLeft>
        <TeacherLoginLeftWrapper>
          <TeacherLogo>lightroom</TeacherLogo>
          <TeacherLoginImage src="https://cdn.dribbble.com/users/3289568/screenshots/6446572/attachments/1379380/250fa021-25fa-405c-9608-9912ff1982fe.png" />
        </TeacherLoginLeftWrapper>
      </TeacherLoginLeft>
      <TeacherLoginRight>
        <RegisterPara>
          Not a member ? <Link to="/teacher/register">Sign up now</Link>
        </RegisterPara>
        <TeacherLoginRightWrapper>
          <TeacherLoginHeading>Sign in to Lightroom</TeacherLoginHeading>
          <TeacherLoginForm>
            <TeacherLoginItem>
              <Label>Email</Label>
              <Input type="email" required />
            </TeacherLoginItem>
            <TeacherLoginItem>
              <Label>Password</Label>
              <Input type="password" required />
            </TeacherLoginItem>
            <TeacherLoginBtn>Sign In</TeacherLoginBtn>
          </TeacherLoginForm>
        </TeacherLoginRightWrapper>
      </TeacherLoginRight>
    </TeacherLoginContainer>
  );
}

export default TeacherLogin;
