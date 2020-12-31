import styled from 'styled-components';
import { device } from '../../device';

export const BioContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const BioImageWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 2rem;

  @media ${device.laptop} {
    min-width: 45vw;
  }
`;

export const BioHeader = styled.h2`
  padding: 1rem 0;

  background-color: rgba(235,235,235,.15);
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

export const BioParagraph = styled.p`
  line-height: 1.5;
  font-weight: 200;
  padding: 1rem 0;
`;


export const BioTextContentWrapper = styled.div`
  display: contents;


`;

export const BioAboutBlockWrapper = styled.div`
  display: contents;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;

    ${props => props.isAbout && `
      max-width: 40vw;
      padding: 0 2rem;
    `}
  }


`;


export const LargeScreenBioWrapper = styled.div`
  display: contents;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;
