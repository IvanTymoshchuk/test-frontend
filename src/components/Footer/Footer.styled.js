import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  display: flex;
  background-color: #18191c;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: ManropeThin;
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
  color: rgb(255 255 255 / 60%);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  margin-left: 5px;

  &:hover {
    color: #2196f3;
  }
`;

export const EmailContact = styled.a`
  font-size: 16px;
  margin-left: 5px;
  color: rgb(255 255 255 / 60%);

  &:hover {
    color: #2196f3;
  }
`;

export const Address = styled.p`
  color: rgb(255 255 255 / 60%);
  font-size: 16px;
  margin-left: 5px;
`;

export const GoogleMapsLink = styled.a`
  color: rgb(255 255 255 / 60%);
  text-decoration: none;
  font-size: 16px;
  margin-left: 5px;
  transition: color 0.3s;

  &:hover {
    color: #2196f3;
  }
`;
