import React from 'react';
import OptionsList from '../options-list/options-list';
import Tabs from '../tabs/tabs';
import { TitleLevel } from '../title/title';
import {
  CardTitle,
  ContentWrapper,
  Price,
  ProductImage,
  StyledProductCard
} from './style';

function ProductCard({ product }) {
  const tabsList = [
    { title: 'Oписание', content: product.description },
    {
      title: 'Характеристики',
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: 'Свойства',
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <StyledProductCard>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <CardTitle level={TitleLevel.H3} marginBottom={16}>
          {product.name}
        </CardTitle>
        <Tabs maxContentHeight={105} tabsList={tabsList} />
        <Price>
          {product.price}грн. / {product.weight}г.
        </Price>
      </ContentWrapper>
    </StyledProductCard>
  );
}

export default ProductCard;
