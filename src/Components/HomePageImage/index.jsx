import React, { useState } from 'react'
import {
  DescriptionContainer,
  ImageContainer,
  DescriptionTextWrapper,
  ArtworkTitle,
  ArtworkDescription
} from './styles';
import Image from 'gatsby-image';

const HomePageImage = ({ imageSrc: { childImageSharp: { fluid } }, index, description, title }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <ImageContainer
      index={index}
      onClick={() => setShowModal(!showModal)}
    >
      { showModal && (
        <DescriptionContainer>
          <DescriptionTextWrapper>
            <ArtworkTitle>{title}</ArtworkTitle>
            <ArtworkDescription>{description}</ArtworkDescription>
          </DescriptionTextWrapper>
        </DescriptionContainer>
      )}
      <Image fluid={fluid} />
    </ImageContainer>
  )
}

export { HomePageImage };

