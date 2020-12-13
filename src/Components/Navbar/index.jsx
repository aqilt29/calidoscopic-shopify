import React from 'react'
import { Div, Row, Col, Image } from 'atomize'
import Icon from '../../Images/LogoWordBlack.svg'
import HamburgerIcon from '../../Images/blackHamburger.svg'
import { Link } from 'react-router-dom'
import Drawer from './mobileDrawer'

const Navbar = () => {
  return (
    <Div>
      <Row justify="space-between">
        <Col>
          <Link to="/">
            <Image
              src={Icon}
              minH="5rem"
              maxW="33vw"
            />
          </Link>
        </Col>
        {/* Menu for md and up */}
        <Col 
          justify="flex-end" 
          d={{ xs: "none",  sm: "flex" }} 
          align="center"
        >
          <Div p="1rem">
            <Link to="/">Home</Link>
          </Div>
          <Div p="1rem">
            <Link to="/contact">Get In Touch</Link>
          </Div>
          <Div p="1rem">
            <Link to="/product">Shop</Link>
          </Div>
        </Col>
        {/* mobile menu */}
        <Col
          d={{ xs: "flex", sm: "none" }}
          align="center"
          justify="flex-end"
        >
          <Drawer />
        </Col>
      </Row>
    </Div>
  )
}

export default Navbar
