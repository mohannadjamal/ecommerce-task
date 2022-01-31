import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Layout from './components/Layout/Layout';

import './App.scss';

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
