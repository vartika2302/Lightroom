import styled from "styled-components";

const TeacherLoginContainer = styled.div``;

const TeacherLoginLeft = styled.div``;

const TeacherLogo = styled.h1``;

const TeacherLoginVideo = styled.video``;

const TeacherLoginRight = styled.div``;

const TeacherLoginHeading = styled.h2``;

const TeacherLoginForm = styled.form``;

const TeacherLoginItem = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const TeacherLoginBtn = styled.button``;

function TeacherLogin() {
  return (
    <TeacherLoginContainer>
      <TeacherLoginLeft>
        <TeacherLogo>
          light<span>room</span>
        </TeacherLogo>
        <TeacherLoginVideo loop autoPlay muted>
          <source
            src="https://cdn.dribbble.com/users/76454/screenshots/14683749/media/32516dcdd808c4c40c76e144f7374e7d.mp4"
            type="video/mp4"
          />
        </TeacherLoginVideo>
      </TeacherLoginLeft>
      <TeacherLoginRight>
        <TeacherLoginHeading>Sign in to Lightroom</TeacherLoginHeading>
        <TeacherLoginForm>
          <TeacherLoginItem>
            <Label>Email</Label>
            <Input type="email" required/>
          </TeacherLoginItem>
          <TeacherLoginItem>
            <Label>Password</Label>
            <Input type="password" required/>
          </TeacherLoginItem>
          <TeacherLoginBtn>Sign in</TeacherLoginBtn>
        </TeacherLoginForm>
      </TeacherLoginRight>
    </TeacherLoginContainer>
  );
}

export default TeacherLogin;
