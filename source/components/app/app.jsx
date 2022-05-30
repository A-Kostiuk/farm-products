import React from 'react';
import { features } from '../../mocks/features';
import { GlobalStyle } from './style';
import products from '../../mocks/products';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import Order from '../pages/order/order';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { AppRoute } from '../../const';
import ScrollToTop from '../ui/scroll-to-top/scroll-to-top';

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage features={features} />} />
          <Route
            path={AppRoute.ORDER.replace(AppRoute.MAIN, '')}
            element={<Order products={products} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
