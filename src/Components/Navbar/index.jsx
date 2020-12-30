import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import CalidoscopicLogo from '../../Images/LogoWordBlack.svg'
import {
  Hamburger,
  LinksContainer,
  LogoLink,
  NavBarContainer,
  ActiveAwareLink,
} from './styles'
import MobileNav from './MobileNav'
import { InstagramLinkIcon } from './MobileNav/styles'

const Navbar = (...props) => {

  const [isOpen, setIsOpen] = useState(false)

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
        <InstagramLinkIcon href="https://instagram.com/calidoscopic?igshid=ln26g6qsfo7l" target="__blank" />
      </LinksContainer>
      <Hamburger onClick={() => setIsOpen(!isOpen)} viewBox="-120 -90 700 700" />
      <MobileNav isOpen={isOpen} toggleDrawer={setIsOpen} />
    </NavBarContainer>
  )
}

export default Navbar
