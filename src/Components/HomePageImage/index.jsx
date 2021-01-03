import React, { useState } from 'react'
import { DescriptionContainer, ImageContainer } from './styles';
import Image from 'gatsby-image';

const HomePageImage = ({ imageSrc: { childImageSharp: { fluid } }, index, description }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <ImageContainer
      index={index}
      onClick={() => setShowModal(!showModal)}
    >
      { showModal && (
        <DescriptionContainer>
          <p>hello world</p>
        </DescriptionContainer>
      )}
      <Image fluid={fluid} />
    </ImageContainer>
  )
}

export { HomePageImage };

