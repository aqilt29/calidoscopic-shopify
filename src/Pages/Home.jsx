import React from 'react'
// import { ShopContext } from '../Context/shopifyContext'
import { Image as CloudinaryImage } from 'cloudinary-react'
import { Container, Row, Div } from 'atomize'

const Home = () => {

  // const { test } = useContext(ShopContext)

  return (
    <Container>
      <Row>
        <Div>
            <CloudinaryImage
              publicId="homepage/brandedbasketballteam_u1sgxg"
              width="300"
              crop="scale"
            />
            <CloudinaryImage
              publicId="homepage/trumpakimbo_cuhazk"
              width="300"
              crop="scale"
            />
        </Div>
      </Row>
    </Container>
  )
}

export default Home
