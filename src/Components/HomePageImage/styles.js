import styled from 'styled-components'
import { device } from '../../device';

export const ImageContainer = styled.div`
  width: ${Math.floor(Math.random() * Math.floor(85))};

  @media ${device.mobileL} {
    width: 100%;
  }
`;