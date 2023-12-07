// PhotographyPortfolio.js
import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import img1 from "../../assets/Photo_Portfolio/1Y6A0489.jpg";
import img2 from "../../assets/Photo_Portfolio/90a8407e6b611658ae8f2f7748c173dc.jpg";
import img3 from "../../assets/Photo_Portfolio/Harvard_2023_Pictures_1.png";

function PhotographyPortfolio() {


  return (
    <div className="photo-portfolio container">
      <h1 className="title text-center py-4">Photography Portfolio</h1>
      <div className="Photo session py-4 text-center">
        <Link
          to="/PhotographyPortfolio/Portrait"
          className="Photo Portfolio link text-center py-4 "
        >
        <img src={img1} alt="img1" className="img-" />
          <h3 className="category-name py-4">Portrait</h3>
        </Link>
        <Link
          to="/PhotographyPortfolio/PhotographyLandscape"
          className="Photo Portfolio link text-center py-4 "
        >
        <img src={img2} alt="img2" className="img-" />
          <h3 className="category-name py-4">Landscape</h3>
        </Link>
        <Link
          to="/PhotographyPortfolio/PhotoGraphyCommercial"
          className="Photo Portfolio link text-center py-4 "
        >
        <img src={img3} alt="img3" className="img-" />
          <h3 className="category-name py-4">Commercial</h3>
        </Link>
      </div>
    </div>
  );
}

export default PhotographyPortfolio;
