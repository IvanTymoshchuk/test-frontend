import styled from '@emotion/styled';
import { colors } from 'utils';

export const FooterContainer = styled.div`
  display: flex;
  background-color: ${colors.backgroundHeader};
  color: ${colors.white};
  padding: 20px;
  text-align: center;
`;

export const SubscribeRow = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 1187px;
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1187px;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const ContactLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  margin-left: 5px;

  &:hover {
    color: ${colors.blueActenct};
  }
`;

export const EmailContact = styled.a`
  font-size: 16px;
  margin-left: 5px;
  color: ${colors.white};

  &:hover {
    color: ${colors.blueActenct};
  }
`;

export const Address = styled.p`
  color: ${colors.white};
  font-size: 16px;
  margin-left: 5px;
`;

export const GoogleMapsLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  font-size: 16px;
  margin-left: 5px;
  transition: color 0.3s;

  &:hover {
    color: ${colors.blueActenct};
  }
`;
