import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ProductProvider } from './Contexts/ProductContext';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ProductProvider>
    </Provider>
  </StrictMode>
);
