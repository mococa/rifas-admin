// External
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import { global as Global } from 'styles/global';

// Routers
import { Router } from 'pages/Router/index';

// Providers
import { AppProvider } from 'contexts';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
