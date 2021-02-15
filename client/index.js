import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { App } from './App.jsx';
import { AppProvider } from './context/context.jsx';

render(
  <AuthProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </AuthProvider>,
  document.getElementById('root')
);
