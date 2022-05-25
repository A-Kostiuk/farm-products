import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavCustomLink = styled(Link)`
  font-weight: 700;
  color: ${(props) => props.theme.colors.customBlack};

  &:hover {
    text-decoration: underline;
  }
`;
