import { ReactNode } from 'react';

export type EventName =
  | 'added product to cart'
  | 'started checkout'
  | 'viewed product';

export type EventData = {
  [key: string]: any;
};

export type OmnisendContextType = {
  trackEvent: (eventName: EventName, eventData?: any) => void;
};

export type OmnisendProviderProps = {
  children: ReactNode;
  brandID: string;
};

export type Omnisend = {
  track: (eventName: EventName, eventData?: EventData) => void;
  push: (args: any[]) => void;
};
