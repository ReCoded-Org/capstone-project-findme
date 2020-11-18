import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './i18n';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';

import commonAr from './translations/ar/common.json';
import commonEn from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: commonEn, // 'common' is our custom namespace commonAr
    },
    ar: {
      common: commonAr,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
