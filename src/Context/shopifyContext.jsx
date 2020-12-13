import React, { Component, createContext } from 'react';
import Shopify from 'shopify-buy';

const client = Shopify.buildClient({
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN
})

const ShopContext = createContext();

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: 'test'
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider;
