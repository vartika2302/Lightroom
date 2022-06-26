import styled from "styled-components";

const StudentRegisterContainer = styled.div``;

const StudentRegisterLeft = styled.div``;

const StudentLogo = styled.h1``;

const StudentRegisterImage = styled.img``;

const StudentRegisterRight = styled.div``;

const StudentRegisterWrapper = styled.div``;

const StudentRegisterHeading = styled.h2``;

const StudentRegisterItem = styled.div``;

const StudentRegisterForm = styled.form``;

const Label = styled.span``;

const Input = styled.input``;

const StudentRegisterBtn = styled.button``;

function StudentRegister() {
  return (
    <StudentRegisterContainer>
      <StudentRegisterLeft>
        <StudentLogo>
          light<span>room</span>
        </StudentLogo>
        <StudentRegisterImage src="https://cdn.dribbble.com/users/76454/screenshots/6596459/drbbb_4x.png?compress=1&resize=1000x750&vertical=top" />
      </StudentRegisterLeft>
      <StudentRegisterRight>
        <StudentRegisterWrapper>
          <StudentRegisterHeading>Sign up to Lightroom</StudentRegisterHeading>
          <StudentRegisterForm>
            <StudentRegisterItem>
              <Label>Name</Label>
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
        </StudentRegisterWrapper>
      </StudentRegisterRight>
    </StudentRegisterContainer>
  );
}

export default StudentRegister;
