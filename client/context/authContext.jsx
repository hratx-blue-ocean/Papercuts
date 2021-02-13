import axios from "axios";
import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const checkAuth = async () => {
    await axios.post(
      `http://localhost:3000/api/auth/register_login?email=idk@gmail.com&password=testpass`,
      null,
      { withCredentials: true }
    );
    let userData = await axios.get("http://localhost:3000/checkauth");
    return { userData: userData.data };
  };
  return (
    <AuthContext.Provider value={checkAuth()}>{children}</AuthContext.Provider>
  );
};
