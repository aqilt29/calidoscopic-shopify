import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'
import CalidoscopicLogo from '../../Images/LogoWordBlack.svg'
import {
  Hamburger,
  LinksContainer,
  LogoLink,
  NavBarContainer,
  ActiveAwareLink,
} from './styles'

const Navbar = (...props) => {

  return (
    <NavBarContainer>
      <LogoLink to="/">
          <img src={CalidoscopicLogo} />
      </LogoLink>
      <LinksContainer>
        <ActiveAwareLink to="/About">About</ActiveAwareLink>
        <ActiveAwareLink to="/Contact">Contact</ActiveAwareLink>
        <ActiveAwareLink to="/Shop">Shop</ActiveAwareLink>
        <ActiveAwareLink to="/">Cart</ActiveAwareLink>
      </LinksContainer>
      <Hamburger viewBox="-120 -90 700 700" />
    </NavBarContainer>
  )
}

export default Navbar
