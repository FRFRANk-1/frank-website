// PhotographyPortfolio.js
import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import img1 from "../../assets/Photo_Portfolio/1Y6A0489.jpg";
import img2 from "../../assets/Photo_Portfolio/90a8407e6b611658ae8f2f7748c173dc.jpg";
import img3 from "../../assets/Photo_Portfolio/Harvard_2023_Pictures_1.png";

// PhotographyPortfolio.js
// ... import statements ...

function PhotographyPortfolio() {
  return (
    <div className="photo-portfolio container">
      <h1 className="title text-center py-4">Photography Portfolio</h1>
      <div className="row">
        <div className="col">
          <Link to="/PhotographyPortfolio/Portrait" className="photo-portfolio-link">
            <img src={img1} alt="Portrait" className="photo-img" />
            <h3 className="category-name text-center">Portrait</h3>
          </Link>
        </div>
        <div className="col">
          <Link to="/PhotographyPortfolio/PhotographyLandscape" className="photo-portfolio-link">
            <img src={img2} alt="Landscape" className="photo-img" />
            <h3 className="category-name text-center">Landscape</h3>
          </Link>
        </div>
        <div className="col">
          <Link to="/PhotographyPortfolio/PhotoGraphyCommercial" className="photo-portfolio-link">
            <img src={img3} alt="Commercial" className="photo-img" />
            <h3 className="category-name text-center">Commercial</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhotographyPortfolio;

