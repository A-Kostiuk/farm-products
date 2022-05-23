import React, { useState } from 'react';
import Button from '../../ui/button/button';
import Panel from '../../ui/panel/panel';
import Title, { TitleLevel } from '../../ui/title/title';
import {
  InputAdress,
  LeftColumn,
  Main,
  PanelTitle,
  PriceLabel,
  PriceValue,
  StyledOrder,
  SwiperStyled,
  CheckboxLabel
} from './style';

import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from 'swiper/core';
import 'swiper/css/bundle';
import ProductCard from '../../ui/product-card/product-card';
import CheckboxList from '../../ui/checkbox-list/checkbox-list';
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function Order({ products }) {
  const [selectProductsIds, setSelectProductsIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [address, setAddress] = useState('');

  const handleOnClickProduct = (value, index) => {
    if (!selectProductsIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProductsIds.map((id) =>
    products.find((product) => product.id === id),
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0,
  );

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} грн.\n`,
    )}
    Итого: ${fullPrice} грн.
    Доставка по адресу: ${address}.`);
  };

  return (
    <Main>
      {products && products.length ? (
        <>
          <Title level={TitleLevel.H1} visuallyHidden>
            Магазин фермерских продуктов
          </Title>
          <StyledOrder>
            <LeftColumn>
              <Panel marginBottom={18}>
                <PanelTitle level={TitleLevel.H2} marginBottom={12}>
                  Выберите продукты
                </PanelTitle>
                <CheckboxList
                  onClickLabel={handleOnClickProduct}
                  labelComponent={CheckboxLabel}
                  selectValues={selectProductsIds}
                  onChange={setSelectProductsIds}
                  options={products.map((product) => ({
                    value: product.id,
                    title: product.name,
                  }))}
                />
              </Panel>
              <Panel>
                <PanelTitle level={TitleLevel.H2} marginBottom={24}>
                  Сделать заказ
                </PanelTitle>
                <InputAdress
                  value={address}
                  onChange={(evt) => setAddress(evt.target.value)}
                  placeholder="Введите адрес доставки"
                />
                <PriceLabel>Цена</PriceLabel>
                <PriceValue value={fullPrice} />
                <Button
                  onClick={handleBuyClick}
                  disabled={!(address && selectProductsIds.length)}
                >
                  Купить
                </Button>
              </Panel>
            </LeftColumn>
            <SwiperStyled
              onSwiper={setSwiperRef}
              spaceBetween={12}
              direction="vertical"
              slidesPerView="auto"
              scrollbar={{ draggable: true }}
              mousewheel
              pagination={{
                type: 'fanction',
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard product={item} />
                </SwiperSlide>
              ))}
            </SwiperStyled>
          </StyledOrder>
        </>
      ) : (
        <p>Продукты были слишком вкусные и их разобрали.</p>
      )}
    </Main>
  );
}

export default Order;
