import React from 'react';
import { StyledButton } from './style';

function Button({ children, link, minWidth, ...props }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: 'button', type: 'button' })}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
export default Button;
