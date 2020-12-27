import styled from 'styled-components';
import { device } from '../../device'

export const WallImagesContainer = styled.div`
  /* max-width: 1300px; */
  padding: 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;



