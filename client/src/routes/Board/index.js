import React from "react";
import { Routes, Route } from "react-router-dom";
import BoardPage from "./BoardPageCC";

function BoardIndex() {
  return (
    <Routes>
      <Route path="/:boardname" element={<BoardPage />} />
    </Routes>
  );
}

export default BoardIndex;
