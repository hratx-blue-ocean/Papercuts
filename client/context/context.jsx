import React, { createContext } from 'react';
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ pie: 'dwa' }}>{children}</AppContext.Provider>
  );
};