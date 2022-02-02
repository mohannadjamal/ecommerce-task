import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import MainNavigation from './components/MainNavigation/MainNavigation';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Banner />
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
