import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/UserContext';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  rootElement,
);
