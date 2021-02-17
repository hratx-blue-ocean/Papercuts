import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedClubData, setSelectedClubData] = useState({});
  return (
    <AppContext.Provider value={{ selectedClubData, setSelectedClubData }}>
      {children}
    </AppContext.Provider>
  );
};
