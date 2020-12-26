import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'
import CalidoscopicLogo from '../../Images/LogoWordBlack.svg'
import { Hamburger, LogoLink, NavBarContainer } from './styles'


const Navbar = (...props) => {

  console.log(props)

  return (
    <NavBarContainer>
      <LogoLink to="/">
          <img src={CalidoscopicLogo} />
      </LogoLink>
      <Hamburger viewBox="-120 -90 700 700" />
    </NavBarContainer>
  )
}

export default Navbar


// export const query = graphql`
//   query {
//     file(relativePath: { eq: "LogoWordBlack.svg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `