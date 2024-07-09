import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import SStore from './redux/SStore';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={SStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);


