import React from 'react'
import { ImageContainer } from './styles';
import Image from 'gatsby-image';

const HomePageImage = ({ imageSrc: { childImageSharp: { fluid } }, index }) => {
  
  return (
    <ImageContainer index={index}>
      <Image fluid={fluid} />
    </ImageContainer>
  )
}

export { HomePageImage };

