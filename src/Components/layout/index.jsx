import React from 'react'
import Navbar from '../Navbar';
import { LayoutContainer, LayoutOverlay } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutOverlay>
        <Navbar />
        {children}
      </LayoutOverlay>
    </LayoutContainer>
  )
}

export { Layout }
