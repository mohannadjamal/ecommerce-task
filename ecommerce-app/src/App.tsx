import { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

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
  const themeCtx = useContext(ThemeContext);

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
