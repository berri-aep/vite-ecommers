import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
