import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("Access_Token") ? true : false
  );
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  useEffect(() => {
    setLoading(true);
    if (isLoggedIn) {
      loginUser();
    } else {
      logoutUser();
    }
    setLoading(false);
  }, []);

  const loginUser = () => {
    setIsLoggedIn(true);
    setUserId(localStorage.getItem("userId"));
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };
  const value = React.useMemo(
    () => ({
      loading,
      isLoggedIn,
      userId,
      loginUser,
      logoutUser,
    }),
    [isLoggedIn, loginUser, logoutUser, loading, userId]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
