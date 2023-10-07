import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ProductProvider } from './Contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ProductProvider>
);
