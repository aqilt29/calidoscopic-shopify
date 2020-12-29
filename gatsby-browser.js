import React from 'react'
import { GlobalStyle } from './src/styles/globalStyle'
import { ProductContextProvider } from './src/context/ProductContext';
import { CartContextProvider } from './src/context/CartContext';
import { ScrollProvider } from './src/Context/scrollContext'

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>
      <ScrollProvider>  
        {element}
      </ScrollProvider>
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
