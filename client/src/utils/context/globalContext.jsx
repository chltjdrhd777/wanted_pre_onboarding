import React, { useState, createContext } from "react";

export const CTX = createContext(null);

function Index({ children }) {
  const [mode, setMode] = useState("white");

  function onHandleMode() {
    if (mode === "white") {
      setMode("dark");
    } else {
      setMode("white");
    }
  }

  const contextValue = {
    mode,
    onHandleMode,
  };

  return <CTX.Provider value={contextValue}>{children}</CTX.Provider>;
}

export default Index;
