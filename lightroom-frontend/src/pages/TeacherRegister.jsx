import styled from "styled-components";
import { Link } from "react-router-dom";

const TeacherRegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const TeacherRegisterLeft = styled.div`
  flex: 1;
`;

const TeacherRegisterLeftWrapper = styled.div`
  background-color: #cdc2ae;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const TeacherLogo = styled.h1`
  align-self: flex-start;
  margin-left: 4rem;
  font-family: "Sacramento", cursive;
  color: #86566c;
  font-size: 2.2rem;
`;

const TeacherRegisterImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
`;

const TeacherRegisterRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPara = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
`;

const TeacherRegisterRightWrapper = styled.div`
  width: 40%;
  height: 65vh;
`;

const TeacherRegisterHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const TeacherRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const TeacherRegisterItem = styled.div`
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

const TeacherRegisterBtn = styled.button`
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

function TeacherRegister() {
  return (
    <TeacherRegisterContainer>
      <TeacherRegisterLeft>
        <TeacherRegisterLeftWrapper>
          <TeacherLogo>
            light<span>room</span>
          </TeacherLogo>
          <TeacherRegisterImage src="https://cdn.dribbble.com/users/3289568/screenshots/8395743/media/865709418c2a1d70637f94f5484ff554.jpg?compress=1&resize=800x600&vertical=top" />
        </TeacherRegisterLeftWrapper>
      </TeacherRegisterLeft>
      <TeacherRegisterRight>
        <LoginPara>
          Already a member ? <Link to="/teacher/login">Sign In</Link>
        </LoginPara>
        <TeacherRegisterRightWrapper>
          <TeacherRegisterHeading>Sign up to Lightroom</TeacherRegisterHeading>
          <TeacherRegisterForm>
            <TeacherRegisterItem>
              <Label>First name</Label>
              <Input type="text" />
            </TeacherRegisterItem>
            <TeacherRegisterItem>
              <Label>Last name</Label>
              <Input type="text" />
            </TeacherRegisterItem>
            <TeacherRegisterItem>
              <Label>Username</Label>
              <Input type="text" />
            </TeacherRegisterItem>
            <TeacherRegisterItem>
              <Label>Email</Label>
              <Input type="email" />
            </TeacherRegisterItem>
            <TeacherRegisterItem>
              <Label>Password</Label>
              <Input type="password" />
            </TeacherRegisterItem>
            <TeacherRegisterItem>
              <Label>Confirm Password</Label>
              <Input type="password" />
            </TeacherRegisterItem>
            <TeacherRegisterBtn>Sign up</TeacherRegisterBtn>
          </TeacherRegisterForm>
        </TeacherRegisterRightWrapper>
      </TeacherRegisterRight>
    </TeacherRegisterContainer>
  );
}

export default TeacherRegister;
