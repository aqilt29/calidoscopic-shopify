import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopifyContext'

const Home = () => {

  const { test } = useContext(ShopContext)

  return (
    <div>
      Home
      {test}
    </div>
  )
}

export default Home
