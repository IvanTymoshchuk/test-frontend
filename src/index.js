import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App/App';
import { GlobalStyle } from 'GlobalStyles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-frontend">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
