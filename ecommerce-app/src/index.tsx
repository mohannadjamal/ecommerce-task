import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.scss';

import { CartContextProvider } from './store/cart-context';
import { ThemeContextProvider } from './theme/theme-context';

ReactDOM.render(
  <>
    <ThemeContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContextProvider>
  </>,
  document.getElementById('root')
);
