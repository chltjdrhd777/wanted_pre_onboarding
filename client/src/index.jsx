import React from "react";
import { render } from "react-dom";
import App from "App";
import GlobalCTXProvider from "utils/context/globalContext";

render(
  <React.StrictMode>
    <GlobalCTXProvider>
      <App />
    </GlobalCTXProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
