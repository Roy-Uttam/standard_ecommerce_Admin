// React Module Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// CSS File of Antopolis for every React Project 
import './index.css';

// Component Imports
import App from './App';

// base url for global use
window.baseUrl = "https://asce.antopolis.xyz/api/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
