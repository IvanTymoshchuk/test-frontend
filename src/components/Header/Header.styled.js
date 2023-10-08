import styled from '@emotion/styled';
import { mq, colors } from '../../utils';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${colors.backgroundHeader};
  justify-content: space-around;
  padding: 16px 0;
  align-items: center;
  ${mq.tablet} {
    height: 48px;
  }
`;

export const Logo = styled.div`
  animation: pulse 2s ease-in-out infinite alternate;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const HeaderLogo = styled(Link)`
  font-family: MontserratSemiBold;
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  ${mq.tablet} {
    font-size: 18px;
  }

  ${mq.tablet} {
    font-size: 24px;
  }
`;

export const Span = styled.span`
  color: ${colors.blueActenct};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NavItem = styled.li`
  margin: 0 8px;
  ${mq.tablet} {
    margin: 32px 0;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${colors.blueActenct};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Nav = styled.nav``;
