import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { AuthContextProvider } from './store/auth-context';
import './i18n';

const locale = navigator.language;
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <IntlProvider locale={locale} key={locale} defaultLocale='en'>
          <App />
        </IntlProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
