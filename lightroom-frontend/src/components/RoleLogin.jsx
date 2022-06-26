import styled from "styled-components";

const RoleLoginContainer = styled.div``;

const RoleLoginWrapper = styled.div``;

const RoleLoginTop = styled.div``;

const RoleLoginBottom = styled.div``;

const RoleLoginLeft = styled.div``;

const RoleLoginRight = styled.div``;

const RoleLoginImage = styled.img``;

const RoleLoginHeading = styled.h1``;

const RoleLoginInfo = styled.p``;

const RoleLoginBtn = styled.button``;

function RoleLogin() {
  return (
    <RoleLoginContainer>
      <RoleLoginWrapper>
        <RoleLoginTop>
          <RoleLoginLeft>
            <RoleLoginImage src="https://st3.depositphotos.com/5383684/16706/v/380/depositphotos_167066338-stock-illustration-young-woman-teacher-in-front.jpg?forcejpeg=true" />
          </RoleLoginLeft>
          <RoleLoginRight>
            <RoleLoginHeading>
              Are you a <span>TEACHER</span> ?
            </RoleLoginHeading>
            <RoleLoginInfo>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </RoleLoginInfo>
            <RoleLoginBtn>Login</RoleLoginBtn>
          </RoleLoginRight>
        </RoleLoginTop>
        <RoleLoginBottom>
          <RoleLoginLeft>
            <RoleLoginHeading>
              Are you a <span>STUDENT</span> ?
            </RoleLoginHeading>
            <RoleLoginInfo>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </RoleLoginInfo>
            <RoleLoginBtn>Login</RoleLoginBtn>
          </RoleLoginLeft>
          <RoleLoginRight>
            <RoleLoginImage src="https://assets.materialup.com/uploads/a0cc7bb6-d719-44aa-9b5e-7de72d9d6187/preview.jpg" />
          </RoleLoginRight>
        </RoleLoginBottom>
      </RoleLoginWrapper>
    </RoleLoginContainer>
  );
}

export default RoleLogin;
