import React from 'react';
import { landscapePhotos } from "../../../assets/photoCategories";
import { landscapeDescriptions } from "../../../assets/landscapeDescriptions"

const PhotographyLandscape = () => {

  const photoData = landscapePhotos.map((src, index) => {
    const descriptionObj = landscapeDescriptions.find(desc => desc.src === src) || {};
    return { ...descriptionObj, src };
  });

  return (
    <div className="photo-portfolio container">
    <h1 className="title text-center py-4">Landscape</h1>
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
};

export default PhotographyLandscape;
