import styled from 'styled-components';
import { VisuallyHidden } from '../../styled';

export const StyleTitle = styled.h2`
  line-height: 115%;
  font-weight: 700;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : '100%')};
  margin: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.level === 1) {
      fontSize = '44px';
    }
    if (props.level === 3) {
      fontSize = '32px';
    }
    if (props.level === 4) {
      fontSize = '24px';
    }
    return fontSize;
  }};

  ${(props) => (props.$visuallyHidden ? VisuallyHidden : null)}
`;
