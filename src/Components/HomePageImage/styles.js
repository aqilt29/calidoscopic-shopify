import styled from 'styled-components'
import { device } from '../../device';

const widthSelector = (index) => {
  let width;

  switch (index) {
    case 0:
      width = "70%";
      break;
    case 1:
      width = "100%";
      break;
    case 2:
      width = "33%";
      break;
    case 3:
      width = "37%";
      break;
    case 4:
      width = "60%";
      break;
    case 5:
      width = "40%";
      break;
    case 5:
      width = "70%";
      break;
    case 6:
      width = "33%";
      break;
    case 7:
      width = "50%";
      break;
    case 8:
      width = "40%";
      break;
    case 9:
      width = "45%";
      break;
    case 10:
      width = "45%";
      break;
    case 11:
      width = "30%";
      break;
    case 12:
      width = "40%";
      break;
    case 13:
      width = "47%";
      break;
    case 14:
      width = "50%";
      break;
    default:
      width = "37%";
  }

  return width
}


const paddingSelector = (index) => {

}


const positions = {
  center: `
    
  `,
  left: ``,
  right: ``,
}


export const ImageContainer = styled.div`
  
  ${props => console.log(props)}

  @media ${device.tablet} {
    width: ${({index}) => widthSelector(index)};
    margin-bottom: 2rem;
    margin-right: 2rem;
  }

`