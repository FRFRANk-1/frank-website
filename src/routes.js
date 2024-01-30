import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";

import PhotographyPortfolio from "./pages/Photography portfolio";
import Portrait from "./pages/Photography portfolio/Portrait";
import PhotographyLandscape from "./pages/Photography portfolio/Landscape";
import PhotographyCommercial from "./pages/Photography portfolio/PhotoCommericial";
import Wedding from "./pages/Photography portfolio/Wedding";

import VideoProductionPortfolio from "./pages/VideoProductionPortfolio";
import VideoLandscape from "./pages/VideoProductionPortfolio/VideoLandscape";
import Vlog from "./pages/VideoProductionPortfolio/Vlog";
import VideoCommericial from "./pages/VideoProductionPortfolio/VideoCommericial";
import VideoWedding from "./pages/VideoProductionPortfolio/wedding";

function WebsiteRoutes() {
//   let { currentUser } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/PhotographyPortfolio" element={<PhotographyPortfolio />} />
      <Route path="/PhotographyPortfolio/Portrait" element={<Portrait />} />
      <Route path="/PhotographyPortfolio/PhotographyLandscape" element={<PhotographyLandscape />} />
      <Route path="/PhotographyPortfolio/PhotographyCommercial" element={<PhotographyCommercial />} />
      <Route path="/PhotographyPortfolio/Wedding" element={<Wedding />} />

      <Route path="/VideoProductionPortfolio" element={<VideoProductionPortfolio/>} />
      <Route path="/VideoProductionPortfolio/VideoLandscape" element={<VideoLandscape />} />
      <Route path="/VideoProductionPortfolio/Vlog" element={<Vlog />} />
      <Route path="/VideoProductionPortfolio/VideoCommericial" element={<VideoCommericial/>} />
      <Route path="/VideoProductionPortfolio/wedding" element={<VideoWedding />} />
    </Routes>
  );
}

export default WebsiteRoutes;
