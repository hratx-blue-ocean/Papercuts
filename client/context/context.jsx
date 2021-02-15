import React, { createContext } from 'react';

import exampleClubs from '../components/bookClubPage/exampleData.js';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ exampleClubs }}>{children}</AppContext.Provider>;
};
