import React from "react";
import { Link } from "react-router-dom";

const VideoProductionPortfolio = () => {
  return (
    <div className="video-portfolio container">
      <div>
        <h1 className="title text-center py-4">Video Production Portfolio</h1>
        <div className="Photo session py-4">
        <Link
            to="/VideoProductionPortfolio/VideoCommericial"
            className="Photo Portfolio link text-center py-4 "
          >
            

            <div className="video-showcase-uiuc responsive-iframe-container">
              <iframe
                title="UIUC-Campus Tour"
                src="//player.bilibili.com/player.html?aid=261204747&bvid=BV1je411j7SY&cid=874049816&p=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              >
                {" "}
              </iframe>
            </div>
            <h2 className="category-name text-center py-4">Commercial</h2>
          </Link>
          <Link
            to="/VideoProductionPortfolio/VideoLandscape"
            className="Photo Portfolio link text-center py-4 "
          >
            <div className="video-showcase-FL responsive-iframe-container">
            <iframe
              title="FL-Video"
              src="//player.bilibili.com/player.html?aid=435951795&bvid=BV1z3411X7gq&cid=982346306&p=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            >
              {" "}
            </iframe>
            </div>

            <h2 className="category-name text-center py-4">Video Landscape</h2>
          </Link>
          <Link
            to="/VideoProductionPortfolio/Vlog"
            className="Photo Portfolio link text-center py-4 "
          >
            <div className="video-showcase-FL responsive-iframe-container">
              <iframe
                title="FL-Video"
                src="//player.bilibili.com/player.html?aid=825543064&bvid=BV1Wg4y1L7zJ&cid=1114529437&p=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              >
                {" "}
              </iframe>
            </div>
            <h2 className="category-name text-center py-4">Vlog</h2>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default VideoProductionPortfolio;
