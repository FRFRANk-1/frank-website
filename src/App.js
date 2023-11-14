import React from "react";
import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

import WebsiteRoutes from "./routes";
import GlobalNav from "./components/navigation/nav-bar";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

function App() {
  return (

      <HashRouter>
        <div classname="App">
        <GlobalNav/>
        <WebsiteRoutes />
        </div>
      </HashRouter>

  );
}

export default App;
