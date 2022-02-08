import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.scss';

import { CartContextProvider } from './store/cart-context';

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById('root')
);
