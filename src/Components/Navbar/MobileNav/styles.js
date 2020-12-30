import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'gatsby';
import { FaInstagram } from 'react-icons/fa'

//  dont seem to be able to apply styling here
export const MobileNavContainer = styled(SwipeableDrawer)`

`;

export const MobileDrawerLink = styled(Link)`
  text-decoration: none;
  font-family: Jura;
  font-size: 1.7rem;
  color: black;

`;

//  wraps each link to provide some styles
export const MobileLinkWrapper = styled.div`
  text-align: center;
  padding: 1rem;
`;

//  div within the drawer to customize
export const MobileLinksContainer = styled.div`
  padding-top: 2rem;
  margin: 0 2rem;
`;

export const InstaLogo = styled(FaInstagram)`
  height: 3rem;
  width: 3rem;
`;

const InstaLinkTag = styled.a`
  display: block;
  margin: 0 2rem;
  text-align: center;
  color: #000;
`;

export const InstagramLinkIcon = (props) => {
  return (
    <InstaLinkTag {...props}>
      <InstaLogo />
    </InstaLinkTag>
  )
}
