import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const HeaderWrap = styled.header`
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
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const HeaderLogo = styled.a`
  color: #eee;
  font-weight: 600;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 8px;
  ${mq.tablet} {
    margin: 32px 0;
  }
`;

export const NavLink = styled.a`
  padding: 10px;
  color: #eee;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  :hover {
    background-color: rgb(41, 41, 128);
  }
`;

export const Nav = styled.nav``;
