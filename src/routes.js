import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import PhotographyPortfolio from "./pages/Photography portfolio";

function WebsiteRoutes() {
//   let { currentUser } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/PhotographyPortfolio" element={<PhotographyPortfolio />} />
    </Routes>
  );
}

export default WebsiteRoutes;
