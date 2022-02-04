import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

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
import Header from "component/Layout/Header";
import Home from "routes/Home";
import Setting from "routes/Setting";

import ModeToggle from "component/Toggle";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user.mode);
  const queryClient = new QueryClient({
    defaultOptions: {
      // 캐싱작업이 필요한 쿼리만 옵션을 주도록 하고 디폴트는 다 꺼버림
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const theme = mode === "white" ? whiteTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalCSS />

        {/* Route */}

        <Router>
          <Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/setting" element={<Setting />} />
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
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
