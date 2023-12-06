import "./index.css";

import photo1 from "../../assets/images/IMG_3446.JPG";
import photo2 from "../../assets/images/1Y6A8185 - Copy.png";

function PhotographyPortfolio() {
  return (
    <div className="photo-portfolio container">
      <h1 className="title"> Photography Portfolio</h1>
      <div className="row">
        {/* photo 1 */}
        <div className="col-md-4 col-sm-6 mb-4"></div>
        <div className="photo-item">
          <img
            src={photo1}
            className="photo1 img-fluid hover-effect"
            alt="photo1"
          />
          <p className="photo-description">The</p>
        </div>
      </div>
      {/* photo 2 */}
      <div className="col-md-4 col-sm-6 mb-4">
        <div className="photo-item">
          <img
            src={photo2}
            className="photo2 img-fluid hover-effect"
            alt="photo2"
          />
          <p className="photo-description">The</p>
        </div>
      </div>
    </div>
  );
}

export default PhotographyPortfolio;
