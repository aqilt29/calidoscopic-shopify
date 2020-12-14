// Basic Sidedrawer
import React, { useContext } from 'react'
import { Div, SideDrawer, Icon, Image, Row, Col, Text, Button } from "atomize";
import HamburgerIcon from '../../Images/blackHamburger.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/shopifyContext';

const MobileNavDrawer = ({ isOpen, onClose }) => {

  const { openCart } = useContext(ShopContext)

  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" justify="flex-end">
        <Icon name="Cross" size="3rem" onClick={onClose} />
      </Div>
      <Div d="flex">
        <Col>
          <Row p="1rem">
            <Link to="/" onClick={onClose}><Text hoverTextColor="gray900" textColor="black900">Home</Text></Link>
          </Row>
          <Row p="1rem">
            <Link to="/contact" onClick={onClose}><Text hoverTextColor="gray900" textColor="black900">Get In Touch</Text></Link>
          </Row>
          <Row p="1rem">
            <Link to="/shop" onClick={onClose}><Text hoverTextColor="gray900" textColor="black900">Shop</Text></Link>
          </Row>
          <Row p="1rem">
            <Button 
              suffix={<Icon m={{ l: '0.5rem' }} name="Card" color="white" size="20px" />}
              hoverBg="gray600"
              color="white"
              h="2rem"
              p={{ x: "0.75rem" }}
              onClick={() => openCart()}
            >
              Cart
            </Button>
          </Row>
        </Col>
      </Div>
    </SideDrawer>
  );
};

class MobileDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Image
          src={HamburgerIcon}
          m={{ x: '1.5rem'}}
          h="1.5rem"
          maxW="1.5rem"
          onClick={() => this.setState({ showSideDrawer: true })}
        />
        <MobileNavDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default MobileDrawer;