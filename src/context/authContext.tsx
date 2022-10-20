import React, { createContext, useContext } from "react";

const AuthContext = createContext({});

export const useAuthContext = useContext(AuthContext);

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
