import { Container, Row, Col, Text, Div } from 'atomize'
import React from 'react'
import { Image as CloudinaryImage } from 'cloudinary-react'

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col d='flex' align="center">
          <Div d="flex" align="center" maxW="50vw" >
            <CloudinaryImage publicId="contact/meetTheArtist_q8ag0c" responsive crop="scale"  />
          </Div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
