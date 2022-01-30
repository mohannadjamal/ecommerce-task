import React from 'react';
import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

import Homepage from './pages/Homepage';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Layout>
  );
}

export default App;
