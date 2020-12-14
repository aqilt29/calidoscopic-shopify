import React, { useContext, useEffect } from 'react'
import { Text } from 'atomize'

import { ShopContext } from '../Context/shopifyContext'


const Shop = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()

  }, [fetchAllProducts])

  if (!products) return <Text>Loading...</Text>

  return (
    <div>
      Shop
      <div>
        {products && products.map((product) => {
          return <pre key={product.id}>{JSON.stringify(product.title, null, 2)}</pre>
        })}
      </div>
    </div>
  )
}

export default Shop
