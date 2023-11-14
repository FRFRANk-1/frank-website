import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Home from "./pages/home";
function WebsiteRoutes() {
//   let { currentUser } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default WebsiteRoutes;
