import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { baseURL, start_mock } from './config'

const prepare = () => {
  if (start_mock) {
    console.log(`Starting MSW for mocking backend`);
    const { worker } = require('./mocks/worker');
    worker.start();
  }
  console.log(`Loading frontend...connect to API at ${baseURL}`);
  return Promise.resolve();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
prepare().then(() => root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
));
