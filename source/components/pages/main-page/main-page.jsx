import React from 'react';
import About from '../../blocks/about/about';
import Features from '../../blocks/features/features';
import { TitleLevel } from '../../ui/title/title';
import { Main } from './style';

function MainPage({ features }) {
  return (
    <Main>
      <About level={TitleLevel.H1} />
      <Features features={features} level={TitleLevel.H2} />
    </Main>
  );
}

export default MainPage;
