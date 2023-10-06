import React from 'react';
import {
  HeaderWrap,
  Logo,
  HeaderLogo,
  Nav,
  NavList,
  NavItem,
  NavLink,
  Image,
} from './Header.styled';
import logo from '../../img/logo.png';

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <HeaderLogo to="home">
          <Image src={logo} alt="logo" />
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
    </HeaderWrap>
  );
};

export default Header;
