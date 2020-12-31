import React from 'react'
import { BioAboutBlockWrapper, BioContainer, BioHeader, BioImageWrapper, BioParagraph, BioTextContentWrapper, LargeScreenBioWrapper } from './styles'
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
      <LargeScreenBioWrapper>
        <BioImageWrapper>
          <Img fluid={bioFluidSrc} />
        </BioImageWrapper>
        <BioAboutBlockWrapper isAbout>
          <BioHeader>About the Artist</BioHeader>
          <BioParagraph>{bioText.background}</BioParagraph>
        </BioAboutBlockWrapper>
      </LargeScreenBioWrapper>
      <BioAboutBlockWrapper>
        <BioHeader>Statement</BioHeader>
        <BioParagraph>{bioText.statement}</BioParagraph>
      </BioAboutBlockWrapper>
    </BioContainer>
  )
}

export default AboutBio
