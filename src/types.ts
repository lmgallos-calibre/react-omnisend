import { ReactNode } from 'react';

export type EventName =
  | 'added product to cart'
  | 'started checkout'
  | 'viewed product';

export type EventData = {
  origin: 'api';
  eventID?: string;
  eventVersion: 'v5' | 'v2' | '';
  eventTime?: string;
  properties: OmnisendEventProperties;
};

export type OmnisendEventProperties = {
  abandonedCheckoutURL?: string;
  cartID?: string;
  currency?: string;
  value?: number;
  lineItems?: OmnisendLineItem[];
  page?: OmnisendPage;
  product?: OmnisendProduct;
  userInfo?: OmnisendUserInfo;
  utm?: OmnisendUTM;
};

export type OmnisendLineItem = {
  productID: string;
  productTitle: string;
  productDescription?: string;
  productPrice: number;
  productStrikeThroughPrice?: number;
  productDiscount?: number;
  productQuantity: number;
  productSKU?: string | number;
  productVariantID?: string;
  productVariantImageURL?: string;
  productImageURL?: string;
  productURL?: string;
  productCategories?: {
    id: string;
    title: string;
  }[];
};

export type OmnisendPage = {
  title: string;
  url: string;
};

export type OmnisendProduct = {
  id?: string;
  title?: string;
  price?: string;
  oldPrice?: string;
  currency?: string;
  imageUrl?: string;
  url?: string;
  status?: string;
  categories?: {
    id: string;
    title: string;
  }[];
};

export type OmnisendUserInfo = {
  city?: string;
  country?: string;
  device?: string;
  language?: string;
  os?: string;
  sessionId?: string;
};

export type OmnisendUTM = {
  campaign?: string;
  medium?: string;
  source?: string;
};

export type OmnisendContact = {
  id?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  customProperties?: Record<string, any>;
  tags?: string[];
  optIns?: OmnisendOptIn[];
  optOuts?: OmnisendOptOut[];
  consents?: OmnisendConsent[];
};

export type OmnisendOptIn = {
  channel: string;
  createdAt: string;
  source?: string;
};

export type OmnisendOptOut = {
  channel: string;
  createdAt: string;
  reason?: string;
  source?: string;
};

export type OmnisendConsent = {
  channel: string;
  createdAt: string;
  ip?: string;
  source?: string;
  userAgent?: string;
};

export type OmnisendContextType = {
  trackEvent: (eventName: EventName, eventData?: EventData) => void;
};

export type OmnisendProviderProps = {
  children: ReactNode;
  brandID: string;
};

export type Omnisend = {
  track: (eventName: EventName, eventData?: EventData) => void;
  push: (args: any[]) => void;
};
