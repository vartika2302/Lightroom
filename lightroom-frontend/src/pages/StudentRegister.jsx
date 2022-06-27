import { Link } from "react-router-dom";
import styled from "styled-components";

const StudentRegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const StudentRegisterLeft = styled.div`
  flex: 1;
`;

const StudentRegisterLeftWrapper = styled.div`
  background-color: #f2d184;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const StudentLogo = styled.h1`
  align-self: flex-start;
  margin-left: 4rem;
  font-family: "Sacramento", cursive;
  color: #86566c;
  font-size: 2.2rem;
`;

const StudentRegisterImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
`;

const StudentRegisterRight = styled.div`
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

const StudentRegisterRightWrapper = styled.div`
  width: 40%;
  height: 65vh;
`;

const StudentRegisterHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const StudentRegisterItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const StudentRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  height: 30px;
  margin-top: 0.5rem;
  outline-color: #76ba99;
`;

const StudentRegisterBtn = styled.button`
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

function StudentRegister() {
  return (
    <StudentRegisterContainer>
      <StudentRegisterLeft>
        <StudentRegisterLeftWrapper>
          <StudentLogo>
            light<span>room</span>
          </StudentLogo>
          <StudentRegisterImage src="https://cdn.dribbble.com/users/76454/screenshots/6596459/drbbb_4x.png?compress=1&resize=1000x750&vertical=top" />
        </StudentRegisterLeftWrapper>
      </StudentRegisterLeft>
      <StudentRegisterRight>
        <LoginPara>
          Already a member ? <Link to="/student/login">Sign in now</Link>
        </LoginPara>
        <StudentRegisterRightWrapper>
          <StudentRegisterHeading>Sign up to Lightroom</StudentRegisterHeading>
          <StudentRegisterForm>
            <StudentRegisterItem>
              <Label>First name</Label>
              <Input type="text" />
            </StudentRegisterItem>
            <StudentRegisterItem>
              <Label>Last name</Label>
              <Input type="text" />
            </StudentRegisterItem>
            <StudentRegisterItem>
              <Label>Username</Label>
              <Input type="text" />
            </StudentRegisterItem>
            <StudentRegisterItem>
              <Label>Email</Label>
              <Input type="email" />
            </StudentRegisterItem>
            <StudentRegisterItem>
              <Label>Password</Label>
              <Input type="password" />
            </StudentRegisterItem>
            <StudentRegisterItem>
              <Label>Confirm Password</Label>
              <Input type="password" />
            </StudentRegisterItem>
            <StudentRegisterBtn>Sign up</StudentRegisterBtn>
          </StudentRegisterForm>
        </StudentRegisterRightWrapper>
      </StudentRegisterRight>
    </StudentRegisterContainer>
  );
}

export default StudentRegister;
