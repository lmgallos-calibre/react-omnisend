# Omnisend React Package

A React context wrapper for Omnisend.

## Installation

```bash
npm install react-omnisend
```

## Usage

```
import { OmnisendProvider, useOmnisend } from 'react-omnisend';

<OmnisendProvider brandID="YOUR_BRAND_ID">
  <App />
</OmnisendProvider>
```

## Tracking events

```
const omnisend = useOmnisend();
omnisend.trackEvent("event_name", { key: "value" });
```

## Supported events

Now we only support 3 events, from Omnisend, those are:

```https://api-docs.omnisend.com/reference/added-product-to-cart```
```https://api-docs.omnisend.com/reference/started-checkout```
```https://api-docs.omnisend.com/reference/viewed-product```

**Send event data according to those docs**