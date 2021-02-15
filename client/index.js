import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { App } from './App.jsx';
import { AppProvider } from './context/context.jsx';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
