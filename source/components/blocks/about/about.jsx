import React from 'react';
import Title from '../../ui/title/title';
import { AboutSection, ContentWrapper, Text } from './style';

function About({level}) {
  return (
    <AboutSection>
      <ContentWrapper>
        <Title level={level} maxWidth={550}>Магазин фермерских продуктов с доставкой</Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </ContentWrapper>
    </AboutSection>
  );
}

export default About;
