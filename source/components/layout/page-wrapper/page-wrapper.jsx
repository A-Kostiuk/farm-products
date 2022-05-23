import React from 'react';
import MainPage from '../../pages/main-page/main-page';
import Order from '../../pages/order/order';
import Footer from '../footer/footer';
import Header from '../header/header';

function PageWrapper({ features, products }) {
  return (
    <>
      <Header />
      {/* <MainPage features={features} /> */}
      <Order products={products} />
      <Footer />
    </>
  );
}

export default PageWrapper;
