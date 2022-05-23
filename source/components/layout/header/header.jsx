import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import { HeaderContent, StyledHeader } from './style';

function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo />
        <Nav />
      </HeaderContent>
    </StyledHeader>
  );
}

export default Header;
