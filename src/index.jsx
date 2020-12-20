import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopProvider from './Context/shopifyContext';

import './index.css'

console.log(process.env)

ReactDOM.render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
