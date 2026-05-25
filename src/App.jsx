import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resumen from "./components/Resumen";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Resumen</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Resumen />} />
      </Routes>
    </Router>
  );
}

export default App;
