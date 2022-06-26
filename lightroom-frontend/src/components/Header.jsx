import styled from "styled-components";

const HeaderContainer = styled.div``;

const HeaderWrapper = styled.div``;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div``;

const HeaderHeading = styled.h1``;

const HeaderHead = styled.span``;

const HeaderInfo = styled.p``;

const HeaderBtn = styled.button``;

const HeaderImage = styled.img``;

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderHeading>
            <HeaderHead>Online </HeaderHead>
            Education
          </HeaderHeading>
          <HeaderInfo>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </HeaderInfo>
          <HeaderBtn>Learn more</HeaderBtn>
        </HeaderLeft>
        <HeaderRight>
          <HeaderImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOUklBd-heAoIOP1OSHSVjwO8wmLATNlmQQ&usqp=CAU" />
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
