import { useContext, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { ThemeProvider, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import languages from './localization/languages';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import MainNavigation from './components/MainNavigation/MainNavigation';

import lightTheme from './theme/light-theme';
import darkTheme from './theme/dark-theme';
import ThemeContext from './theme/theme-context';

import './App.scss';

function App() {
  const theme = useTheme();
  const themeCtx = useContext(ThemeContext);
  const currentLanguageCode = cookies.get('i18next') || 'en';

  useEffect(() => {
    console.log('Setting page stuff');
    const currentLanguage = languages.find(
      (l) => l.code === currentLanguageCode
    );
    document.body.dir = currentLanguage?.dir || 'ltr';
  }, [currentLanguageCode]);
  console.log(theme.direction);
  return (
    <ThemeProvider
      theme={themeCtx.currentMode === 'light' ? lightTheme : darkTheme}
    >
      <Banner />
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
