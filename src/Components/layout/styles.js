import styled from 'styled-components'
// import background from '../../Images/calidoscopic-bg.jpg'
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
  height: 100vh;
`;
