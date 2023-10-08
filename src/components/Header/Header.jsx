import React from 'react';
import logo from '../../img/logo.png';
import {
  HeaderContainer,
  Logo,
  Image,
  HeaderLogo,
  Span,
  Nav,
  NavList,
  NavItem,
  NavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Image src={logo} alt="logo" />
        <HeaderLogo to="home">
          Rent
          <Span>Car</Span>
        </HeaderLogo>
      </Logo>

      <Nav id="nav-menu">
        <NavList>
          <NavItem>
            <NavLink to="home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="catalog">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="favorite">Favorite</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
