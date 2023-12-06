import "./index.css";

import React from "react";
import {photos} from "../../assets/photos";

function PhotographyPortfolio() {

  return (
<div className="photo-portfolio container">
      <h1 className="title text-center">Photography Portfolio</h1>
      <div className="row">
        {photos.map((photo, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 photo-item">
            <img
              src={photo}
              className="img-fluid hover-effect"
              alt={`photo-${index}`}
            />
            <p className="photo-description">Description for photo {index}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotographyPortfolio;
