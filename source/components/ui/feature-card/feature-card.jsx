import React from 'react';
import { TitleLevel } from '../title/title';
import { CardTitle, Description, Header, Owner } from './style';

function FeatureCard({ title, owner, isNegative, image, about }) {
  return (
    <>
      <Header image={image}>
        <CardTitle level={TitleLevel.H3}>{title}</CardTitle>
        <Owner isNegative={isNegative}>
          {owner}
        </Owner>
      </Header>
      <Description>{about}</Description>
    </>
  );
}

export default FeatureCard;
