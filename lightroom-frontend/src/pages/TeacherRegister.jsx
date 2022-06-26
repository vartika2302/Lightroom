import styled from "styled-components";

const TeacherRegisterContainer = styled.div``;

const TeacherRegisterLeft = styled.div``;

const TeacherLogo = styled.h1``;

const TeacherRegisterVideo = styled.video``;

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
        <TeacherRegisterVideo autoPlay loop muted>
          <source
            src="https://cdn.dribbble.com/users/76454/screenshots/14677011/media/09e48238cfaaa6b2f859e3cbd3ce7c04.mp4"
            type="video/mp4"
          />
        </TeacherRegisterVideo>
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
