import styled from '@emotion/styled';
import { colors } from '../../utils';
import backgroundImg from '../../img/Home.png';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 100vh;
  padding: 30px 0px;
  background-image: url(${backgroundImg});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LinkRental = styled.button`
  width: 274px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-weight: 600;
  line-height: 1.43;
  border-radius: 12px;
  border: transparent;
  background-color: ${colors.primary};
  color: ${colors.white};

  &:hover {
    background-color: green;
  }
`;
