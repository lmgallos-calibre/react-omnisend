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

```
const omnisend = useOmnisend();
omnisend.addedProductToCart({ key: "value" });
```

```
const omnisend = useOmnisend();
omnisend.startedCheckout({ key: "value" });
```

```
const omnisend = useOmnisend();
omnisend.viewedProduct({ key: "value" });
```


## Supported events

Now we only support 3 events, from Omnisend, those are:

```https://api-docs.omnisend.com/reference/added-product-to-cart```

```https://api-docs.omnisend.com/reference/started-checkout```

```https://api-docs.omnisend.com/reference/viewed-product```

**Send event data according to those docs**

## Wrapper supported events

Additionally, we are wrapping those 3 events, into their own function, you just simply call them and pass data according to docs

Also as a second parameter we have `options` object which have, `skip` property, it's boolean, and by using that you can conditionally send data or not
```
addedProductToCart({
    origin:'',
    eventTime:''
    ...etc
}, { skip: true/false })
```

```
startedCheckout({
    origin:'',
    eventTime:''
    ...etc
}, { skip: true/false })
```

```
viewedProduct({
    origin:'',
    eventTime:''
    ...etc
}, { skip: true/false })
```


