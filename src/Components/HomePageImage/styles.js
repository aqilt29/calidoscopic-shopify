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

  @media ${device.tablet} {
    margin-bottom: 2rem;

    ${({index}) => findLocationFromIndex(index)}
  }
`;