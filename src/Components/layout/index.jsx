import React from 'react'
import Navbar from '../Navbar';
import { LayoutContainer, LayoutOverlay, PageSpacer } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutOverlay>
        <Navbar />
        <PageSpacer>
          {children}
        </PageSpacer>
      </LayoutOverlay>
    </LayoutContainer>
  )
}

export { Layout }
