import React, { useContext } from "react";

// THEME
import GlobalCSS from "globalCSS/global";
import { ThemeProvider } from "styled-components";
import { whiteTheme } from "globalCSS/whiteTheme";
import { darkTheme } from "globalCSS/darkTheme";

// CONTEXT
import { CTX } from "utils/context/globalContext";
import ModeToggle from "component/Toggle";

// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Header from "component/Layout/Header";

function App() {
  const GlobalCTX = useContext(CTX);
  const theme = GlobalCTX.mode === "white" ? whiteTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />

      {/* Route */}

      <Router>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Header>
      </Router>

      {/* 1st layer */}
      <ModeToggle onClick={GlobalCTX.onHandleMode}>
        <i className={GlobalCTX.mode === "dark" ? "fas fa-moon" : "fas fa-sun"}></i>
      </ModeToggle>

      <div id="modal"></div>
    </ThemeProvider>
  );
}

export default App;
