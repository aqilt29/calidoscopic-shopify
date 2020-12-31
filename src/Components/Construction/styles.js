import styled from 'styled-components';
import background from '../../Images/marbledTumeric.png'

export const PageOverlay = styled.div`
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
