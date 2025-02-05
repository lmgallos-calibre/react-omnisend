import React, { createContext, useContext, useEffect } from 'react';
import { initializeOmnisend, trackEvent } from './omnisend';
import { OmnisendContextType, OmnisendProviderProps } from './types';

const OmnisendContext = createContext<OmnisendContextType | null>(null);

export const useOmnisend = (): OmnisendContextType => {
  const context = useContext(OmnisendContext);
  if (!context) {
    throw new Error('useOmnisend must be used within an OmnisendProvider');
  }
  return context;
};

const OmnisendProvider = ({ children, brandID }: OmnisendProviderProps) => {
  useEffect(() => {
    initializeOmnisend(brandID);
  }, [brandID]);

  return (
    <OmnisendContext.Provider value={{ trackEvent }}>
      {children}
    </OmnisendContext.Provider>
  );
};

export default OmnisendProvider;
