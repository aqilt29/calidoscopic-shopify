import React from 'react'
import { ImageContainer } from './styles';
import Image from 'gatsby-image';

const HomePageImage = ({ imageSrc: { childImageSharp: { fluid } } }) => {
  return (
    <ImageContainer>
      <Image fluid={fluid} />
    </ImageContainer>
  )
}

export { HomePageImage };

