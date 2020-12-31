import React from 'react';
import { ContactOverlay, ContactContentWrapper, EmailLink, LinkContainer, GifImg } from './styles';
import LogoGif from '../../Images/vaporwaveLogo.gif'

const ContactForm = () => {

  return (
    <ContactOverlay>
      <ContactContentWrapper>
        <a target="_blank" rel="noopener noreferrer" href="mailto:calidoscopicdesign@gmail.com">
          <GifImg src={LogoGif}/>
        </a>
        <LinkContainer>
          <EmailLink target="_blank" rel="noopener noreferrer" href="mailto:calidoscopicdesign@gmail.com">calidoscopicdesign@gmail.com</EmailLink>
        </LinkContainer>
      </ContactContentWrapper>
    </ContactOverlay>
  )
}

export { ContactForm }