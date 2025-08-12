# React Omnisend

A lightweight React context wrapper for integrating Omnisend event tracking seamlessly into your React applications.

## Installation

Install the package using npm:

```bash
npm install react-omnisend
```

or using yarn:

```bash
yarn add react-omnisend
```

## Usage

### React SPA Example

Wrap your application with `OmnisendProvider` and pass your `brandID`:

```jsx
import { OmnisendProvider } from 'react-omnisend';
import App from './App';

const Root = () => (
  <OmnisendProvider brandID="YOUR_BRAND_ID">
    <App />
  </OmnisendProvider>
);

export default Root;
```

### Next.js (Pages Router) Example

Wrap your `_app.js` with `OmnisendProvider`:

```jsx
import { OmnisendProvider } from 'react-omnisend';

function MyApp({ Component, pageProps }) {
  return (
    <OmnisendProvider brandID="YOUR_BRAND_ID">
      <Component {...pageProps} />
    </OmnisendProvider>
  );
}

export default MyApp;
```

### Next.js (App Router) Example

In Next.js App Router, wrap your `layout.tsx` or `layout.js`:

```tsx
import { OmnisendProvider } from 'react-omnisend';

export default function RootLayout({ children }) {
  return (
    <OmnisendProvider brandID="YOUR_BRAND_ID">
      {children}
    </OmnisendProvider>
  );
}
```

## Tracking Events

Use the `useOmnisend` hook to track events:

```jsx
import { useOmnisend } from 'react-omnisend';

const Component = () => {
  const omnisend = useOmnisend();

  const handleEvent = () => {
    omnisend.trackEvent("event_name", { key: "value" });
  };

  return <button onClick={handleEvent}>Track Event</button>;
};
```

## Supported Events

Currently, the package supports the following Omnisend events:

- **Added Product to Cart** ([API Reference](https://api-docs.omnisend.com/reference/added-product-to-cart))
- **Started Checkout** ([API Reference](https://api-docs.omnisend.com/reference/started-checkout))
- **Viewed Product** ([API Reference](https://api-docs.omnisend.com/reference/viewed-product))
- **Placed Order** ([API Reference](https://api-docs.omnisend.com/reference/placed-order))

Ensure that you send event data following Omnisend's API documentation.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this package.

## License

This project is licensed under the MIT License.