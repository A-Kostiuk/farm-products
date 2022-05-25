import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyleLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.customBlack};

  &:hover,
  &:visited,
  &:active {
    color: inherit;
  }
`;

export const Text = styled.p`
  margin: 0 0 0 24px;
  padding: 0;
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
`;
