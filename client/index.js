import React from 'react';
import { render } from 'react-dom';
import { App } from './App.jsx';
import { AppProvider } from './context/context.jsx';
import { AuthProvider } from './context/authContext.jsx';
render(
  <AuthProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </AuthProvider>,
  document.getElementById('root')
);
