import { ReactNode } from 'react';

export type EventName =
  | 'added product to cart'
  | 'started checkout'
  | 'viewed product'
  | 'placed order';

export type EventData = {
  origin: 'api';
  eventID?: string;
  eventVersion: 'v4' | 'v2' | '';
  eventTime?: string;
  properties: Partial<EventProperties>;
  contact?: Partial<Contact>;
};

export type EventProperties = {
  abandonedCheckoutURL: string;
  cartID: string;
  currency: string;
  value: number;
  lineItems: Partial<LineItem>[];
  addedItem: Partial<LineItem>;
  page: Page;
  product: Partial<Product>;
  userInfo: Partial<UserInfo>;
  utm: Partial<UTM>;
  orderID: string;
  totalPrice: number;
  billingAddress: Partial<Address>;
  shippingAddress: Partial<Address>;
  discounts: Partial<Discount>[];
  fulfillmentStatus: FulfillmentStatus;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
  shippingMethod: string;
  tracking: Partial<Tracking>;
};

export type LineItem = {
  productID: string;
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productStrikeThroughPrice: number;
  productDiscount: number;
  productQuantity: number;
  productSKU: string | number;
  productVariantID: string;
  productVariantImageURL: string;
  productImageURL: string;
  productURL: string;
  productCategories: {
    id: string;
    title: string;
  }[];
};

export type Page = {
  title: string;
  url: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  oldPrice: number;
  currency: string;
  imageUrl: string;
  url: string;
  status: string;
  categories: {
    id: string;
    title: string;
  }[];
  description: string;
};

export type UserInfo = {
  city: string;
  country: string;
  device: string;
  language: string;
  os: string;
  sessionId: string;
};

export type UTM = {
  campaign: string;
  medium: string;
  source: string;
};

export type Contact = {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  customProperties?: Record<string, any>;
  tags: string[];
  optIns: Partial<OptIn>[];
  optOuts: Partial<OptOut>[];
  consents: Partial<Consent>[];
};

export type OptIn = {
  channel: string;
  createdAt: string;
  source: string;
};

export type OptOut = {
  channel: string;
  createdAt: string;
  reason: string;
  source: string;
};

export type Consent = {
  channel: string;
  createdAt: string;
  ip: string;
  source: string;
  userAgent: string;
};

export type PaymentStatus =
  | 'awaitingPayment'
  | 'partiallyPaid'
  | 'paid'
  | 'partiallyRefunded'
  | 'refunded'
  | 'voided';

export type FulfillmentStatus =
  | 'unfulfilled'
  | 'inProgress'
  | 'fulfilled'
  | 'delivered'
  | 'restocked';

export type Address = {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
};

export type Discount = {
  code: string;
  amount: number;
  type: 'fixed' | 'percentage';
};

export type Tracking = {
  trackingNumber: string;
  carrier: string;
  url: string;
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
