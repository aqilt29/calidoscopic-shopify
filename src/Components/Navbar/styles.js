import styled from 'styled-components';
import { Link } from 'gatsby'
import { device } from '../../device'
import { FaBars } from 'react-icons/fa'
import { detectScroll } from '../../Context/scrollContext';
import background from '../../Images/marbledTumeric.png'

export const NavBarContainer = detectScroll(styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: .5rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 970;


      transition: ease-in 0.5s;
    ${props => props.scrolled > 9 && `
      background-image: url(${background});
      background: rgba(255, 255, 255, 0.8);
      background-size: cover;
      background-position: center center;
    `}

  @media ${device.tablet} {

  }

  @media ${device.laptop} {
    /* padding-top: 3rem; */
  }
`
)

export const Hamburger = styled(FaBars)`
  height: 3rem;
  width: 3rem;
`;

export const LogoLink = styled(Link)`
  width: 70vw;

  @media ${device.mobileS} {
    padding-top: .2rem;
  }
  
  @media ${device.laptop} {
    max-width: 50vw
  }
`;

