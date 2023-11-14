import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Home from "./pages/home";
import About from "./pages/about";

function WebsiteRoutes() {
//   let { currentUser } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default WebsiteRoutes;
