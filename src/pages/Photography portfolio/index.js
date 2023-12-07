// PhotographyPortfolio.js
import React from "react";
import "./index.css";
import { photoPaths } from "../../assets/photoImports";
import { photoDescriptions } from "../../assets/photoDescriptions"; // Path to your manually maintained descriptions

function PhotographyPortfolio() {
  // Combine photo paths with descriptions
  const photoData = photoPaths.map((src, index) => {
    const descriptionObj = photoDescriptions.find(desc => desc.src === src) || {};
    return { ...descriptionObj, src };
  });

  return (
    <div className="photo-portfolio container">
      <h1 className="title text-center">Photography Portfolio</h1>
      <div className="row">
        {photoData.map((photo, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 photo-item">
            <img
              src={photo.src}
              className="img-fluid hover-effect"
              alt={photo.description || `Photo ${index}`}
            />
            <p className="photo-description">{photo.description || 'No description provided.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotographyPortfolio;
