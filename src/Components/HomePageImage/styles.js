import styled from 'styled-components'
import { device } from '../../device';
import _ from 'lodash';


const findLocationFromIndex = (indexOfImage) => {
  const leftPattern = (x) => 4 * x - 3;
  const rightPattern = (x) => 4 * x - 1;
  const centerPattern = (x) => 2 * (x - 1);

  const nums = _.range(1, 101);

  const leftIndices = Array.from(nums, leftPattern);
  const rightIndices = Array.from(nums, rightPattern);
  const centerIndices = Array.from(nums, centerPattern);


  const positions = {
    left: `
      width: 60%;
      margin-right: 40%;
      margin-bottom: 4rem;
    `,
    center: `
      width: 50%;
      margin-right: auto;
      margin-left: auto;
    `,
    right: `
      width: 60%;
      margin-left: 40%;
      margin-bottom: 4rem;
    `,
    first: `
      width: 80%;
      margin-bottom: 8rem;
    `,
  }

  if(indexOfImage === 0) return positions.first;
  if(_.includes(leftIndices, indexOfImage)) return positions.left;
  if(_.includes(rightIndices, indexOfImage)) return positions.right;
  if(_.includes(centerIndices, indexOfImage)) return positions.center;
}


export const ImageContainer = styled.div`
  position: relative;

  @media ${device.tablet} {
    margin-bottom: 2rem;
    max-height: 60vh;
    ${({index}) => findLocationFromIndex(index)}
  }
`;

export const DescriptionContainer = styled.div`
  background-color: rgba(128,128,128,.8);
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
`;  

export const DescriptionTextWrapper = styled.div`
  margin: auto auto;
  padding: 3rem;
`;

export const ArtworkTitle = styled.h2`
  font-family: Jura;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  display: block;
`;


export const ArtworkDescription = styled.p`
  display: block;
  color: white;
  font-weight: 600;
  font-style: italic;
`;