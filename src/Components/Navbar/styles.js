import styled from 'styled-components';
import { Link } from 'gatsby'
import { device } from '../../device'

import { FaBars } from 'react-icons/fa'
import CalidoscopicLogo from '../../Images/LogoWordBlack.svg'

export const NavBarContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 56px;
  padding: .5rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 970;

  @media ${device.tablet} {
    padding-top: 2rem;
    background-color: transparent;
  }

  @media ${device.laptop} {
    padding-top: 4rem;
  }
`;

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

