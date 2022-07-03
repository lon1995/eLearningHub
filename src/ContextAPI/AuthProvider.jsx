import React, { createContext } from "react";
import useHooks from "../Hooks/useHooks";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContexts = useHooks();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
