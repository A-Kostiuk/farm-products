import React from 'react';
import { StyleTitle } from './style';

export const TitleLevel = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6,
};

function Title({
  level,
  children,
  maxWidth,
  className,
  visuallyHidden,
  marginBottom,
}) {
  return (
    <StyleTitle
      className={className}
      level={level}
      as={`h${level}`}
      $maxWidth={maxWidth}
      $visuallyHidden={visuallyHidden}
      $marginBottom={marginBottom}
    >
      {children}
    </StyleTitle>
  );
}

export default Title;
