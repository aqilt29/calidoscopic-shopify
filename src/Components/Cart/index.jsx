import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shopifyContext'

const Cart = () => {

  const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

  return (
    <div>
      <p>side drawer for cart</p>
    </div>
  )
}

export default Cart;
