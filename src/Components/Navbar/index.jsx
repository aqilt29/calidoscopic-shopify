import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'
import CalidoscopicLogo from '../../Images/LogoWordBlack.svg'
import {
  Hamburger,
  LinksContainer,
  LogoLink,
  NavBarContainer,
  NavLink,
} from './styles'


const Navbar = (...props) => {

  return (
    <NavBarContainer>
      <LogoLink to="/">
          <img src={CalidoscopicLogo} />
      </LogoLink>
      <LinksContainer>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/">Cart</NavLink>
      </LinksContainer>
      <Hamburger viewBox="-120 -90 700 700" />
    </NavBarContainer>
  )
}

export default Navbar
