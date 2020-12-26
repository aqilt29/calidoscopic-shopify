import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    background: #232323;
    color: #000;
  } 

  h1, h2, h3, h4, h5, h6 {
    font-family: Jura;
    font-weight: 400;
  }

  h1 {
    font-weight: 700;
  }

  p {
    font-family: 'source sans pro';
  }
`;
