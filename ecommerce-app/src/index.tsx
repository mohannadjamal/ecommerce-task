import ReactDOM from 'react-dom';
import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App';

import './index.scss';

import { CartContextProvider } from './store/cart-context';
import { ThemeContextProvider } from './theme/theme-context';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    //react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });
const loadingMarkup = <></>;

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <ThemeContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContextProvider>
  </Suspense>,
  document.getElementById('root')
);
