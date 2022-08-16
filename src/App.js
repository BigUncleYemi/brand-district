import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import Router from "./routes";

// function capitalizeString(s) {
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
