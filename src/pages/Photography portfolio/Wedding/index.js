import React from 'react';
import { weddingPhotos } from '../../../assets/photoCategories';
import { weddingDescriptions } from '../../../assets/weddingDescriptions';

const Wedding = () => {
    // Combine the photos with their descriptions
    const photoData = weddingPhotos.map((src, index) => {
      const descriptionObj = weddingDescriptions.find(desc => desc.src === src) || {};
      return { ...descriptionObj, src };
    });
  
    return (
      <div className="container">
        <h1 className="title text-center py-4">Wedding</h1>
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
  }

export default Wedding;