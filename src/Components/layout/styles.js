import styled from 'styled-components'
import { device } from '../../device';
import background from '../../Images/marbledTumeric.png'

export const LayoutContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const LayoutOverlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
  width: 100vw;
  height: auto;
`;

export const PageSpacer = styled.div`
  padding: 3.5rem 0;

  @media ${device.tablet} {
    padding: 6rem 0;
  }
`;