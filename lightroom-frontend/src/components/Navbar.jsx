import styled from "styled-components";

const NavbarContainer = styled.div``;

const NavbarWrapper = styled.div``;

const NavbarLeft = styled.div``;

const NavbarHeading = styled.h1``;


const NavbarRight = styled.div``;

const NavbarItem = styled.span``;

const NavbarBtn = styled.button``;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLeft>
          <NavbarHeading>
            light<span>room</span>
          </NavbarHeading>
        </NavbarLeft>
        <NavbarRight>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Dashboard</NavbarItem>
          <NavbarItem>Contact Us</NavbarItem>
          <NavbarBtn>Login</NavbarBtn>
        </NavbarRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
