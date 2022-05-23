import styled from 'styled-components';
import visuallyHidden from '../visually-hidden/visually-hidden';

const VisuallyHiddenInput = styled.input`
  ${() => visuallyHidden}

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }
`;

export default VisuallyHiddenInput;
