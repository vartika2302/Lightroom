import styled from "styled-components";

const TeacherRegisterContainer = styled.div``;

const TeacherRegisterLeft = styled.div``;

const TeacherLogo = styled.h1``;

const TeacherRegisterImage = styled.img``;

const TeacherRegisterRight = styled.div``;

const TeacherRegisterHeading = styled.h2``;

const TeacherRegisterForm = styled.form``;

const TeacherRegisterItem = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const TeacherRegisterBtn = styled.button``;

function TeacherRegister() {
  return (
    <TeacherRegisterContainer>
      <TeacherRegisterLeft>
        <TeacherLogo>
          light<span>room</span>
        </TeacherLogo>
        <TeacherRegisterImage src="https://cdn.dribbble.com/users/3289568/screenshots/7217681/media/06168f63d0b75d740b5540ccd34d34be.gif"/>
         
      </TeacherRegisterLeft>
      <TeacherRegisterRight>
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
      </TeacherRegisterRight>
    </TeacherRegisterContainer>
  );
}

export default TeacherRegister;
