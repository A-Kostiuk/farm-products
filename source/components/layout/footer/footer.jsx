import React from 'react';
import Logo from '../../ui/logo/logo';
import { Copyright, FooterContent, StyledFooter } from './style';

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <Logo />
        <Copyright>Создано 2022</Copyright>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
