import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl'
const locale = navigator.language
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={locale} key={locale} defaultLocale='en'>
        <App />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
