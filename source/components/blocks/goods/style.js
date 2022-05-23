import styled from 'styled-components';
import { Li, Ul } from '../../styled';

export const CardItem = styled(Li)`
  background-color: ${(props) => props.theme.colors.basicWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 20px;
  padding: 20px;
  min-height: 288px;
`;

export const CardList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
