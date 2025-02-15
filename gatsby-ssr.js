import React from 'react'
import { GlobalStyle } from './src/styles/globalStyle'
import { ProductContextProvider } from './src/context/ProductContext';
import { CartContextProvider } from './src/context/CartContext';

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>
      {element}
    </CartContextProvider>
  </ProductContextProvider>
);

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
};
