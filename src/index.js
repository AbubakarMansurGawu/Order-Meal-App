import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContextProvider from './context/StoreContext';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
