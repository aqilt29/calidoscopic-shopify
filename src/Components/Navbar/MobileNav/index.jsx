import React from 'react'
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { 
  MobileNavContainer,
  MobileDrawerLink,
  MobileLinkWrapper,
  MobileLinksContainer,
  InstagramLinkIcon,
} from './styles';

const MobileLink = ({ title, to, ...props }) => {

  return (
    <MobileLinkWrapper {...props}>
      <MobileDrawerLink to={to} {...props}>{title}</MobileDrawerLink>
    </MobileLinkWrapper>
  )
}

const links = [
  { to: "/", title: 'Home' },
  { to: "/about", title: 'About' },
  { to: "/contact", title: 'Contact' },
  { to: "/shop", title: 'Shop', underConstruction: true },
]

const MobileNav = ({ isOpen, toggleDrawer }) => {

  const { file: { childImageSharp: { fixed: fixedSrc }}} = useStaticQuery(graphql`
    query LogoImage {
      file(relativePath: {eq: "calidoscopic-icon.png"}) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  
  return (
    <>
      <MobileNavContainer
        open={isOpen}
        anchor="right"
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <MobileLinksContainer>
          <div onClick={() => toggleDrawer(false)}>
            <Img fixed={fixedSrc} />
          </div>
          {
            links.map((link, idx) => {
              return <MobileLink key={`${idx}`} {...link} />
            })
          }
          <InstagramLinkIcon href="https://instagram.com/calidoscopic?igshid=ln26g6qsfo7l" target="__blank" />
        </MobileLinksContainer>
      </MobileNavContainer>
    </>
  )
}

export default MobileNav;
