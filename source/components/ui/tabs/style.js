/* eslint-disable indent */
import styled from 'styled-components';
import { css } from 'styled-components';
import { Button, Ul } from '../../styled';

export const Header = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const TabButton = styled(Button)`
  font-size: 14px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.customBlack};
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$isSelect
      ? css`
          color: ${(p) => p.theme.colors.basicWhite};
          background-color: ${(p) =>
            p.theme.colors.colorForBackgroundFarmProducts};
        `
      : null};
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) =>
    props.$maxContentHeight ? `${props.$maxContentHeight}px` : 'none'};
  overflow-y: auto;
`;
