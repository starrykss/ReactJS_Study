import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { AppProvider } from './contexts/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
