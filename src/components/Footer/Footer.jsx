import React from 'react';
import { BiPhone, BiMailSend, BiMapAlt, BiMap } from 'react-icons/bi';
import {
  FooterContainer,
  SubscribeRow,
  FooterNav,
  ContactContainer,
  ContactLink,
  EmailContact,
  Address,
  GoogleMapsLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <SubscribeRow>
        <FooterNav>
          Contact :
          <ContactContainer>
            <BiPhone size={16} />
            <ContactLink href="tel:+380730000000">
              +380 73 000 00 00
            </ContactLink>
          </ContactContainer>
          <ContactContainer>
            <BiMailSend size={16} />
            <EmailContact href="mailto:info@driveukrainenow.com">
              info@driverukraine.com
            </EmailContact>
          </ContactContainer>
          <ContactContainer>
            <BiMapAlt size={16} />
            <Address>123 Main Street, Kiev, Ukraine</Address>
          </ContactContainer>
          <ContactContainer>
            <BiMap size={16} />
            <GoogleMapsLink
              href="https://www.google.com/maps?q=123+Main+Street+Kiev+Ukraine"
              target="_blank"
            >
              View on Google Maps
            </GoogleMapsLink>
          </ContactContainer>
        </FooterNav>
      </SubscribeRow>
    </FooterContainer>
  );
};

export default Footer;
