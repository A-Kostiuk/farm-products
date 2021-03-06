import React from 'react';
import LogoImage from './../../../assets/logo.cmp.svg';
import { StyleLogo, Text } from './style';

function Logo() {
  return (
    <StyleLogo to='/'>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyleLogo>
  );
}

export default Logo;
