import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shopifyContext'
import { Div, SideDrawer, Text, Row, Col, Container, Icon } from 'atomize'

const Cart = () => {

  const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

  return (
    <SideDrawer isOpen={isCartOpen} onClose={closeCart} >
      <Div d="flex" justify="flex-end">
        <Icon name="Cross" size="3rem" onClick={closeCart} />
      </Div>
      <Div onClick={closeCart}>
        Cart
      </Div>
    </SideDrawer>
  )
}

export default Cart;
