import React, { useContext } from "react";

// THEME
import GlobalCSS from "globalCSS/global";
import { ThemeProvider } from "styled-components";
import { whiteTheme } from "globalCSS/whiteTheme";
import { darkTheme } from "globalCSS/darkTheme";

// CONTEXT
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "redux/slice/userSlice";

// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Header from "component/Layout/Header";

import ModeToggle from "component/Toggle";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user.mode);

  const theme = mode === "white" ? whiteTheme : darkTheme;

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
      <ModeToggle
        onClick={() => {
          dispatch(changeMode());
        }}
      >
        <i className={mode === "dark" ? "fas fa-moon" : "fas fa-sun"}></i>
      </ModeToggle>

      <div id="modal"></div>
    </ThemeProvider>
  );
}

export default App;
