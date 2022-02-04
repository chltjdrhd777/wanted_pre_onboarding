import { useState, createContext } from "react";

export const AuthCTX = createContext(null);

export function AuthCTXWrapper({ children }) {
  const [showMailCodeAuth, setShowMailCodeAuth] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({});

  function hanldeShowMailCodeAuth() {
    setShowMailCodeAuth(true);
  }

  function handleRegisterInfo(registerData) {
    setRegisterInfo(registerData);
  }

  const value = {
    showMailCodeAuth,
    hanldeShowMailCodeAuth,
    registerInfo,
    handleRegisterInfo,
  };

  return <AuthCTX.Provider value={value}>{children}</AuthCTX.Provider>;
}
