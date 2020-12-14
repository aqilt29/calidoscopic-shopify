import React from 'react';
import ReactDOM from 'react-dom';
import { StyleReset } from 'atomize';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from './App';
import ShopProvider from './Context/shopifyContext';

import { CloudinaryContext } from 'cloudinary-react';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();


console.log(process.env)

ReactDOM.render(
  <React.StrictMode>
    <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} >
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <StyleReset />
          <App />
        </StyletronProvider>
      </ShopProvider>
    </CloudinaryContext>
  </React.StrictMode>,
  document.getElementById('root')
);
