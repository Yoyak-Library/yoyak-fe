import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18용 import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('main'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정
reportWebVitals();

