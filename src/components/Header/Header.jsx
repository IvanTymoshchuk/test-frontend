import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineFullscreen } from 'react-icons/ai';
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
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
  CloseButton,
  ToggleButton,
} from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = to => {
    navigate(to);
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Image src={logo} alt="logo" />
        <HeaderLogo onClick={() => handleNavLinkClick('/')}>
          Rent
          <Span>Car</Span>
        </HeaderLogo>
      </Logo>

      <Nav id="nav-menu" className={isMenuOpen ? 'show' : ''}>
        <CloseButton>
          <AiOutlineCloseCircle
            name="close-circle-outline"
            className="header__close"
            onClick={toggleMenu}
          ></AiOutlineCloseCircle>
        </CloseButton>
        <NavList>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/')}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/catalog')}>
              Catalog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/favorite')}>
              Favorite
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <ToggleButton>
        <AiOutlineFullscreen
          name="menu-outline"
          className="header__toggle"
          onClick={toggleMenu}
        ></AiOutlineFullscreen>
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
