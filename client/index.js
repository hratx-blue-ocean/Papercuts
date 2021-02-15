import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './App.jsx';
import { AppProvider } from './context/context.jsx';
import { AuthProvider } from './context/authContext.jsx';
render(
  <AuthProvider>
    <AppProvider>
      <GlobalStyles />
      <App />
    </AppProvider>
  </AuthProvider>,
  document.getElementById('root')
);
