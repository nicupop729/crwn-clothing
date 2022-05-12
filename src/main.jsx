import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/CartContext';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  rootElement,
);
