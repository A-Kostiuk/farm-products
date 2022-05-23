import styled from 'styled-components';
import { Img } from '../../styled';
import Panel from '../panel/panel';
import Title from '../title/title';

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
`;

export const StyledProductCard = styled(Panel)`
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

export const CardTitle = styled(Title)`
  font-size: 24px;
  line-height: 31px;
`;

export const Price = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 14px;
  line-height: 150%;
  display: inline-block;
  margin: 0;
  font-weight: 700;
  color: ${(props) => props.theme.colors.customBlack};
  background-color: ${(props) => props.theme.colors.colorForBackgroundAbout};
  padding: 4px 8px;
`;
