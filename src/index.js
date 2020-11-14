import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './i18n';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import common_ar from './translations/ar/common.json';
import common_en from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    ar: {
      common: common_ar,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
