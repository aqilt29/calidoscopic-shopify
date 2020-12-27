import styled from 'styled-components';
import { device } from '../../device'

export const WallImagesContainer = styled.div`
  max-width: 1300px;
  padding: 0 0;

  @media ${device.tablet} {
    padding: 0 3rem;
  }
`;



