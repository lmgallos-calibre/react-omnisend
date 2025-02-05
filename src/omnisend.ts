import { EventData, EventName } from './types';

export const initializeOmnisend = (brandID: string): void => {
  if (typeof window !== 'undefined') {
    window.omnisend = window.omnisend || [];
    window.omnisend.push(['brandID', brandID]);
    window.omnisend.push(['track', '$pageViewed']);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://omnisnippet1.com/inshop/launcher-v2.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }
};

export const trackEvent = (eventName: EventName, eventData: EventData = {}) => {
  if (window.omnisend) {
    window.omnisend.push(['track', eventName, eventData]);
  } else {
    console.warn('Omnisend script not loaded yet.');
  }
};
