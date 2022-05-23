import styled from 'styled-components';

export const StyledButton = styled.a`
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : '100%')};
  color: ${(props) => props.theme.colors.basicWhite};
  padding: 16.5px;
  background-color: ${(props) => props.theme.colors.colorForButton};
  border: none;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  font-family: inherit;
  line-height: ${(props) => props.theme.lineHeigthDefault};
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.colors.colorForButtonPressed};
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.colors.colorForButton};
  }
`;
