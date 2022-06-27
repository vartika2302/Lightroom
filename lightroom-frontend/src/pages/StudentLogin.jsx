import styled from "styled-components";
import { Link } from "react-router-dom";

const StudentLoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const StudentLoginLeft = styled.div`
  flex: 1;
`;

const StudentLoginLeftWrapper = styled.div`
  background-color: rgb(189, 183, 168);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const StudentLogo = styled.h1`
  align-self: flex-start;
  margin-left: 4rem;
  font-family: "Sacramento", cursive;
  color: #86566c;
  font-size: 2.2rem;
`;

const StudentLoginImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
`;

const StudentLoginRight = styled.div`
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

const StudentLoginRightWrapper = styled.div`
  width: 40%;
  height: 40vh;
`;

const StudentLoginHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const StudentLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const StudentLoginItem = styled.div`
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

const StudentLoginBtn = styled.button`
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

function StudentLogin() {
  return (
    <StudentLoginContainer>
      <StudentLoginLeft>
        <StudentLoginLeftWrapper>
          <StudentLogo>
            light<span>room</span>
          </StudentLogo>
          <StudentLoginImage src="https://cdn.dribbble.com/users/76454/screenshots/9525141/media/e6385d0df77059cee11a5e914378b5bf.png?compress=1&resize=1000x750&vertical=top" />
        </StudentLoginLeftWrapper>
      </StudentLoginLeft>
      <StudentLoginRight>
        <RegisterPara>
          Not a member ? <Link to="/student/register">Sign up now</Link>
        </RegisterPara>
        <StudentLoginRightWrapper>
          <StudentLoginHeading>Sign in to Lightroom</StudentLoginHeading>
          <StudentLoginForm>
            <StudentLoginItem>
              <Label>Email</Label>
              <Input type="email" required />
            </StudentLoginItem>
            <StudentLoginItem>
              <Label>Password</Label>
              <Input type="password" required />
            </StudentLoginItem>
            <StudentLoginBtn>Sign in</StudentLoginBtn>
          </StudentLoginForm>
        </StudentLoginRightWrapper>
      </StudentLoginRight>
    </StudentLoginContainer>
  );
}

export default StudentLogin;
