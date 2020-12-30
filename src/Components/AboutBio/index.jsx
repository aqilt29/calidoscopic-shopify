import React from 'react'
import { BioContainer, BioHeader, BioImageWrapper, BioParagraph } from './styles'
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby'
import { bioText } from '../../Utils/bioText';


const AboutBio = () => {

  const { 
    bioImage: { childImageSharp: { fluid: bioFluidSrc } },
    logoImage: { childImageSharp: { fluid: logoFluidSrc } }
  } = useStaticQuery(graphql`
    query BioImage {
      bioImage: file(relativePath: {eq: "biography/bioPhoto.JPG"}) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoImage: file(relativePath: {eq: "calidoscopic-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(logoFluidSrc);

  return (
    <BioContainer>
      <BioImageWrapper>
        <Img fluid={bioFluidSrc} />
      </BioImageWrapper>
      <BioHeader>About the Artist</BioHeader>
      <BioParagraph>{bioText.background}</BioParagraph>
      <BioHeader>Statement</BioHeader>
      <BioParagraph>{bioText.statement}</BioParagraph>
      <div>
        <p>Instagram CTA</p>
      </div>
    </BioContainer>
  )
}

export default AboutBio
