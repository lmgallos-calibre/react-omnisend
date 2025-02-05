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