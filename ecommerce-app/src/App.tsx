import { Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';

import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import MainNavigation from './components/MainNavigation/MainNavigation';

import './App.scss';

function App() {
  return (
    <Box>
      <Banner />
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default App;
