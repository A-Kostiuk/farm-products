import styled from 'styled-components';
import Title from '../title/title';

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 76px;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    width: 56px;
    height: 56px;
    background-image: url(${(props) => props.image});
    top: 0;
    left: 0;
  }
`;

export const Owner = styled.p`
  color: ${(props) => props.theme.colors.basicWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colors.colorForBackgroundShopProducts
      : props.theme.colors.colorForBackgroundFarmProducts};
  font-size: 14px;
  line-height: 150%;
  padding: 2px 10px;
  margin: 0 0 4px;
`;

export const CardTitle = styled(Title)`
  line-height: 150%;
  font-size: 18px;
  order: 2;
`;

export const Description = styled.p`
  margin: 0;
  white-space: pre-line;
`;
