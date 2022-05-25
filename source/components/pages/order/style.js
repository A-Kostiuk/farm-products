import styled from 'styled-components';
import Title from '../../ui/title/title';
import { Swiper } from 'swiper/react';
import { css } from 'styled-components';
import Price from '../../ui/price/price';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const Main = styled.main`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colors.customWhite};
  width: 100%;
`;

export const StyledOrder = styled.form`
  width: ${(props) => props.theme.pageWidth};
  height: 100%;
  padding: 0 ${(props) => props.theme.pagePadding};
  margin: 0 auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 355px 1fr;
  gap: 20px;
`;

export const LeftColumn = styled.div`
  overflow-y: auto;
`;

export const PanelTitle = styled(Title)`
  font-size: 18px;
  line-height: 150%;
`;

export const PriceLabel = styled.p`
  margin: 0 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

export const PriceValue = styled(Price)`
  margin: 0 0 32px;
`;

export const InputAdress = styled.input.attrs(() => ({
  type: 'text',
}))`
  background-color: ${(props) => props.theme.colors.customWhite};
  display: block;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  padding: 12px;
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    right: 0;
    display: block;
    position: absolute;
    height: 24px;
    width: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    ${(props) =>
    props.$isChecked
      ? css`
            background-color: #fc9b27;
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7657 0.359252C15.4533 0.0468143 14.9468 0.0468143 14.6343 0.359252L5.04983 9.94385L1.3657 6.25972C1.0533 5.94728 0.546797 5.94731 0.234328 6.25972C-0.0781094 6.57213 -0.0781094 7.07863 0.234328 7.39106L4.48414 11.6408C4.79645 11.9532 5.30333 11.953 5.61552 11.6408L15.7657 1.49063C16.0781 1.17822 16.0781 0.671689 15.7657 0.359252Z' fill='white'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: center center;
          `
      : css`
            background-color: ${props.theme.backgroundColorGray};
          `}
  }
`;
