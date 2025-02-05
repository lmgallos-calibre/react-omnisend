import { ReactNode } from 'react';

export type OmnisendContextType = {
  trackEvent: (eventName: string, eventData?: any) => void;
};

export type OmnisendProviderProps = {
  children: ReactNode;
  brandID: string;
};

export type EventData = {
  [key: string]: any;
};

export type OmnisendEvent = {
  track: (eventName: string, eventData?: EventData) => void;
  push: (args: any[]) => void;
};
