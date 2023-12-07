import React from "react";
import { Link } from "react-router-dom";

const VideoProductionPortfolio = () => {
    return (
      <div className="video-portfolio container">
        <h1 className="title text-center py-4">Video Production Portfolio</h1>
        <div className="row">
          <div className="col-md-5 text-center">
            <Link to="/VideoProductionPortfolio/VideoCommericial" className="photo-portfolio-link">
              <div className="video-showcase-uiuc responsive-iframe-container">
                <iframe
                  title="UIUC-Campus Tour"
                  src="//player.bilibili.com/player.html?aid=261204747&bvid=BV1je411j7SY&cid=874049816&p=1"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="category-name">Commercial</h2>
            </Link>
          </div>
          <div className="col-md-5 text-center">
            <Link to="/VideoProductionPortfolio/VideoLandscape" className="photo-portfolio-link">
              <div className="video-showcase-FL responsive-iframe-container">
                <iframe
                  title="FL-Video"
                  src="//player.bilibili.com/player.html?aid=435951795&bvid=BV1z3411X7gq&cid=982346306&p=1"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="category-name">Video Landscape</h2>
            </Link>
          </div>
          <div className="col-md-5 text-center">
            <Link to="/VideoProductionPortfolio/Vlog" className="photo-portfolio-link">
              <div className="video-showcase-FL responsive-iframe-container">
                <iframe
                  title="FL-Video"
                  src="//player.bilibili.com/player.html?aid=825543064&bvid=BV1Wg4y1L7zJ&cid=1114529437&p=1"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="category-name">Vlog</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoProductionPortfolio;
