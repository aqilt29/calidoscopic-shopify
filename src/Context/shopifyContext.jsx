import React, { Component, createContext } from 'react';
import Shopify from 'shopify-buy';

const client = Shopify.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  domain: process.env.GATSBY_SHOPIFY_DOMAIN
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

  componentDidMount() {
    this.createCheckout()
    console.log('mounted context')
  }

  createCheckout = async () => {
    console.log('creating checkout')
    const checkout = await client.checkout.create();
    console.log(checkout.id, checkout.webUrl)
    this.setState({ checkout: checkout })
  }
  
  addItemToCart = async ({ variantId, quantity }) => {
    const lineItemsToAdd = [{
      variantId,
      quantity: parseInt(quantity, 10)
    }]

    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
    this.setState({ checkout: checkout })
  }
  
  fetchAllProducts = async () => {
    let products = [];

    try {
      products = await client.product.fetchAll();
    } catch (error) {
      window.alert(`error: ${error}`)
    }
    
    console.log(products)

    this.setState({ products: products })


  }
  
  fetchProductById = async ({ id }) => {
    const product = await client.product.fetch(id)
    this.setState({ product: product })
  }
  
  closeCart = async () => { this.setState({ isCartOpen: false }); console.log('close') }
  
  openCart = async () => { this.setState({ isCartOpen: true }); console.log('open') }
  
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          createCheckout: this.createCheckout,
          addItemToCart: this.addItemToCart,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductById: this.fetchProductById,
          closeCart: this.closeCart,
          openCart: this.openCart,
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
