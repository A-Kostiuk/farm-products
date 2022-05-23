import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { features } from '../../mocks/features';
import { GlobalStyle } from './style';
import products from '../../mocks/products';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features} products={products} />
    </>
  );
}

export default App;
