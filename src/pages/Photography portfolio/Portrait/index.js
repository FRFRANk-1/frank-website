import React from "react";
import { portraitPhotos } from "../../../assets/photoCategories";
import { portraitDescriptions } from "../../../assets/portraitDescription";

const Portrait = () => {
    // Combine the photos with their descriptions
    const photoData = portraitPhotos.map((src, index) => {
      const descriptionObj = portraitDescriptions.find(desc => desc.src === src) || {};
      return { ...descriptionObj, src };
    });
  
    return (
      <div className="container">
        <h1 className="title text-center py-4">Portrait</h1>
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

export default Portrait;
