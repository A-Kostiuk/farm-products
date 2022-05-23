import React from 'react';
import { StyledPrice } from './style';

const formatPrice = (value) => {
  const roundedPrice = Math.round(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, '$1 ');
};

function Price({ value, className }) {
  return (
    <StyledPrice className={className}>{formatPrice(value)} грн.</StyledPrice>
  );
}

export default Price;
