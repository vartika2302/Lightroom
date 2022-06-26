import styled from "styled-components";

const StudentLoginContainer = styled.div``;

const StudentLoginLeft = styled.div``;

const StudentLogo = styled.h1``;

const StudentLoginImage = styled.img``;

const StudentLoginRight = styled.div``;

const StudentLoginWrapper = styled.div``;

const StudentLoginHeading = styled.h2``;

const StudentLoginForm = styled.form``;

const StudentLoginItem = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const StudentLoginBtn = styled.button``;

function StudentLogin() {
  return (
    <StudentLoginContainer>
      <StudentLoginLeft>
        <StudentLogo>
          light<span>room</span>
        </StudentLogo>
        <StudentLoginImage src="https://cdn.dribbble.com/users/76454/screenshots/9525141/media/e6385d0df77059cee11a5e914378b5bf.png?compress=1&resize=1000x750&vertical=top" />
      </StudentLoginLeft>
      <StudentLoginRight>
        <StudentLoginWrapper>
          <StudentLoginHeading>Sign in to Lightroom</StudentLoginHeading>
          <StudentLoginForm>
            <StudentLoginItem>
              <Label>Email</Label>
              <Input type="email" required/>
            </StudentLoginItem>
            <StudentLoginItem>
              <Label>Password</Label>
              <Input type="password" required/>
            </StudentLoginItem>
            <StudentLoginBtn>Sign in</StudentLoginBtn>
          </StudentLoginForm>
        </StudentLoginWrapper>
      </StudentLoginRight>
    </StudentLoginContainer>
  );
}

export default StudentLogin;
