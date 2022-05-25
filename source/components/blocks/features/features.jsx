import React from 'react';
import { AppRoute } from '../../../const';
import Button from '../../ui/button/button';
import FeatureCard from '../../ui/feature-card/feature-card';
import {
  FeatureItem,
  FeaturesList,
  FeaturesSection,
  FeaturesTitle
} from './style';

function Features({ features, level }) {
  return (
    <FeaturesSection>
      <FeaturesTitle level={level}>
        Почему фермерские продукты лучше?
      </FeaturesTitle>
      <FeaturesList>
        {features.map((feature) => (
          <FeatureItem key={feature.id} isNegative={feature.isNegative}>
            <FeatureCard {...feature} />
          </FeatureItem>
        ))}
      </FeaturesList>
      <Button link={AppRoute.ORDER} minWidth={260}>Купить</Button>
    </FeaturesSection>
  );
}

export default Features;
