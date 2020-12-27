import React, { useState, createContext, useEffect } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {

  const [scrolled, setScrolled] = useState(0)

  const handleScroll= () => setScrolled(window.scrollY);

  useEffect(() => {


    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])



  return (
    <ScrollContext.Provider
      value={{
        scrolled
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export const detectScroll = C => props => {
  return (
    <ScrollContext.Consumer>
      { value => <C {...value} {...props} />}
    </ScrollContext.Consumer>
  )
}