import React from 'react';
import GoodCard from '../../ui/good-card/good-card';
import Title, { TitleLevel } from '../../ui/title/title';
import { CardItem, CardList } from './style';

function Goods({ goods }) {
  return (
    <section>
      <Title level={TitleLevel.H2} visuallyHidden>
        Список товаров
      </Title>
      <CardList>
        {goods.map((good) => (
          <CardItem key={good.id}>{<GoodCard {...good} />}</CardItem>
        ))}
      </CardList>
    </section>
  );
}

export default Goods;
