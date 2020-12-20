import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shopifyContext'
import { Link } from 'react-router-dom';
import CalidoscopicLogo from '../../Images/BlackLogoCalidoscopic.png'

const Navbar = (props) => {

  console.log(props)

  const { openCart } = useContext(ShopContext);

  return (
    <div position="static">
      <div to="/">
        <img src={CalidoscopicLogo} alt="logoText"/>
      </div>
    </div>
  )
}

export default Navbar
