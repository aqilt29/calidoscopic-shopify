import styled from 'styled-components';
import background from '../../Images/marbledTumeric.png'
import { device } from '../../device'

export const ContactOverlay = styled.div`
  background-image: url(${background});
  background-size: cover;
  
  width: 100%;
  min-height: 100%;
  text-align: center;

  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

`;

export const ContactContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(250,250,250, .5);
  padding: 10rem 5rem;
  justify-content: space-around;
  
  @media ${device.tablet} {
  }
`;

export const LinkContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const EmailLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-family: Jura;
  font-weight: 700;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

export const GifImg = styled.img`
  display: block;
  max-width: 70vw;
  /* padding: 5rem 0; */

  @media ${device.tablet} {
    padding: 0;
  }
`;
