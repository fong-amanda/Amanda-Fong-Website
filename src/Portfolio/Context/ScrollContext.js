import React from 'react';
import { createContext, useContext } from 'react';
import { useState } from 'react';

const ScrollContext = createContext({ shouldScroll: true });


export const ScrollProvider = ({ children, shouldScroll = true }) => {
  const [isScrollEnabled, setIsScrollEnabled] = useState(shouldScroll);

  const enableScroll = () => setIsScrollEnabled(true);
  const disableScroll = () => setIsScrollEnabled(false);

  React.useEffect(() => {
    if (!isScrollEnabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isScrollEnabled]);

  return (
    <ScrollContext.Provider 
      value={{ 
        isScrollEnabled, 
        enableScroll, 
        disableScroll 
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};