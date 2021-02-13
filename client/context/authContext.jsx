import axios from 'axios';
import React, { createContext } from 'react';
import { useAsync } from 'react-async-hook';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const checkAuth = async () => {
    // await axios.post(
    //   `http://localhost:3000/api/auth/register_login?email=idk@gmail.com&password=testpass`,
    //   null,
    //   { withCredentials: true }
    // );
    let userData = await axios.get('http://localhost:3000/checkauth');
    return userData.data;
  };
  const { result } = useAsync(checkAuth, []);
  return <AuthContext.Provider value={result}>{children}</AuthContext.Provider>;
};
