import React from "react";
import './App.css';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import WebsiteRoutes from "./routes";
import GlobalNav from "./components/navigation/nav-bar";


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
