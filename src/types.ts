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
  properties: EventProperties;
};

export type EventProperties = {
  abandonedCheckoutURL?: string;
  cartID?: string;
  currency?: string;
  value?: number;
  lineItems?: LineItem[];
  page?: Page;
  product?: Product;
  userInfo?: UserInfo;
  utm?: UTM;
};

export type LineItem = {
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

export type Page = {
  title: string;
  url: string;
};

export type Product = {
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

export type UserInfo = {
  city?: string;
  country?: string;
  device?: string;
  language?: string;
  os?: string;
  sessionId?: string;
};

export type UTM = {
  campaign?: string;
  medium?: string;
  source?: string;
};

export type Contact = {
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
  optIns?: OptIn[];
  optOuts?: OptOut[];
  consents?: Consent[];
};

export type OptIn = {
  channel: string;
  createdAt: string;
  source?: string;
};

export type OptOut = {
  channel: string;
  createdAt: string;
  reason?: string;
  source?: string;
};

export type Consent = {
  channel: string;
  createdAt: string;
  ip?: string;
  source?: string;
  userAgent?: string;
};

export type EventOptions = {
  skip?: boolean;
};

export type OmnisendContextType = {
  trackEvent: (eventName: EventName, eventData?: EventData) => void;
  addedProductToCart: (eventData: EventData, options?: EventOptions) => void;
  startedCheckout: (eventData: EventData, options?: EventOptions) => void;
  viewedProduct: (eventData: EventData, options?: EventOptions) => void;
};

export type OmnisendProviderProps = {
  children: ReactNode;
  brandID: string;
};

export type Omnisend = {
  track: (eventName: EventName, eventData?: EventData) => void;
  push: (args: any[]) => void;
};
