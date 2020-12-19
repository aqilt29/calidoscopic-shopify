import React, { useContext } from 'react'
import { Container, Div, Row, Col, Image, Text, Button, Icon } from 'atomize'
import LogoIcon from '../../Images/LogoWordBlack.svg'
import { Link } from 'react-router-dom'
import MobileDrawer from './mobileDrawer'
import Cart from '../Cart'
import { ShopContext } from '../../Context/shopifyContext'

const Navbar = () => {

  const { openCart } = useContext(ShopContext);

  return (
    <Container>
      <Row justify="space-between">
        <Col p={ {l:{ xs: '1rem', lg: '2rem'}}}>
          <Link to="/">
            <Image
              m={{ x: '1rem'}}
              src={LogoIcon}
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
          p={{ r: { xs: '1rem', lg: '2rem' } }}
        >
          <Div p={{ r: '1rem' }}>
            <Link to="/"><Text hoverTextColor="gray900" textColor="black900">Home</Text></Link>
          </Div>
          <Div p={{ r: '1rem' }}>
            <Link to="/contact"><Text hoverTextColor="gray900" textColor="black900">Get In Touch</Text></Link>
          </Div>
          <Div p={{ r: '1rem' }}>
            <Link to="/shop"><Text hoverTextColor="gray900" textColor="black900">Shop</Text></Link>
          </Div>
          <Div p={{ r: '1rem' }}>
              <Button
                suffix={<Icon m={{ l: '0.5rem' }} name="Card" color="white" size="20px" />}
                hoverBg="gray600"
                color="white"
                size="xsmall"
                h="2rem"
                p={{ x: "0.75rem" }}
                onClick={() => openCart()}
              >
                  Cart
              </Button>
          </Div>
        </Col>
        {/* mobile menu */}
        <Col
          d={{ xs: "flex", sm: "none" }}
          align="center"
          justify="flex-end"
        >
          <MobileDrawer />
        </Col>
        <Cart />
      </Row>
    </Container>
  )
}

export default Navbar
