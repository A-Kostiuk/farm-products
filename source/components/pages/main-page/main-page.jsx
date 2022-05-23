import React from 'react';
import About from '../../blocks/about/about';
import Features from '../../blocks/features/features';
import { TitleLevel } from '../../ui/title/title';

function MainPage({ features }) {
  return (
    <main>
      <About level={TitleLevel.H1} />
      <Features features={features} level={TitleLevel.H2} />
    </main>
  );
}

export default MainPage;
