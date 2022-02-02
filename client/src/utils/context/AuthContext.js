import { useState, createContext } from "react";

export const AuthCTX = createContext(null);

export function AuthCTXWrapper({ children }) {
  const [showMailCodeAuth, setShowMailCodeAuth] = useState(false);

  function hanldeShowMailCodeAuth() {
    setShowMailCodeAuth(true);
  }

  const value = {
    showMailCodeAuth,
    hanldeShowMailCodeAuth,
  };

  return <AuthCTX.Provider value={value}>{children}</AuthCTX.Provider>;
}
