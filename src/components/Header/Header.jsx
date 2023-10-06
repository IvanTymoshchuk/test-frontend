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
        <HeaderLogo href="#">
          <Image src={logo} alt="logo" />
        </HeaderLogo>
      </Logo>

      <Nav id="nav-menu">
        <NavList>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Favorite</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
