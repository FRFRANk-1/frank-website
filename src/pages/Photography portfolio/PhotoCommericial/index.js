import React from 'react';
import { commercialPhotos } from "../../../assets/photoCategories";
import { commercialDescriptions } from "../../../assets/commercialDescriptions";

const PhotographyCommercial = () => {
  // Combine the photos with their descriptions
  const photoData = commercialPhotos.map((src, index) => {
    const descriptionObj = commercialDescriptions.find(desc => desc.src === src) || {};
    return { ...descriptionObj, src };
  });

  return (
    <div className="container">
      <h1 className="title text-center py-4">Commercial</h1>
      <div className="row">
        {photoData.map((photo, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 photo-item">
            <img
              src={photo.src}
              className="img-fluid hover-effect"
              alt={photo.description || `Commercial Photo ${index}`}
            />
            <p className="photo-description">{photo.description || 'No description provided.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographyCommercial;
