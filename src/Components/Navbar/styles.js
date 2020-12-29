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

  @media ${device.laptop} {
    justify-content: space-between;
  }

`);

export const Hamburger = styled(FaBars)`
  height: 3rem;
  width: 3rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  width: 70vw;
  display: block;

  @media ${device.mobileS} {
    padding-top: .2rem;
  }
  
  @media ${device.laptop} {
    max-width: 40vw;
    margin-left: auto;
  }
`;

export const LinksContainer = styled.div`
  @media ${device.mobileS} and (max-width: 1023px) {
    display: none;
  }

  display: flex;
  margin-right: auto;
  width: 40vw;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  text-decoration: none;

  display: block;
  margin-left: 2rem;
  font-family: Jura;
  font-size: 1.7rem;
  color: black;
`;
