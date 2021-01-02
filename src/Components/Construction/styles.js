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

export const OpacityLayer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: whitesmoke;
  opacity: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 100;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  margin: auto;
`;

export const HeaderWrapper = styled.div`
  font-family: Jura;
  height: 50rem;
  font-weight: 700;
  margin: auto;
  padding: 5rem;
`;

export const HeaderText = styled.h1`
  color: black;
  text-align: left;
  color: #000;
`;