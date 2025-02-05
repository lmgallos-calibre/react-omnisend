import React, { createContext, useContext, useEffect } from 'react';
import {
  addedProductToCart,
  initialize,
  startedCheckout,
  trackEvent,
  viewedProduct,
} from './omnisend.js';
import { OmnisendContextType, OmnisendProviderProps } from './types.js';

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
    initialize(brandID);
  }, [brandID]);

  return (
    <OmnisendContext.Provider
      value={{ trackEvent, addedProductToCart, startedCheckout, viewedProduct }}
    >
      {children}
    </OmnisendContext.Provider>
  );
};

export default OmnisendProvider;
