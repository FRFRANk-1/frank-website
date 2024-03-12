import React from "react";
import { Link } from "react-router-dom";
import Contact_bar from "../../components/contact/contact_bar";

const VideoProductionPortfolio = () => {
  return (
    <div className="video-portfolio container">
      <div className="flex-container">
        <div className="text">
          <div className="p-1">
            <Contact_bar />
          </div>
          <div className="p-2">
            <h1 className="title text-center py-4">
              Video Production Portfolio
            </h1>
            <div className="row">
              <div className="col-md-5 text-center">
                <Link
                  to="/VideoProductionPortfolio/VideoEvent"
                  className="photo-portfolio-link"
                >
                  <div className="video-showcase-Harvard responsive-iframe-container">
                    <iframe
                      title="Harvard-2023-Lunar-Festival"
                      src="//player.bilibili.com/player.html?aid=308950125&bvid=BV1sA41167Pz&cid=996740769&p=1"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="category-name">Commercial Event</h2>
                </Link>
              </div>
              <div className="col-md-5 text-center">
                <Link
                  to="/VideoProductionPortfolio/VideoCommericial"
                  className="photo-portfolio-link"
                >
                  <div className="video-showcase-uiuc responsive-iframe-container">
                    <iframe
                      title="UIUC-Campus Tour"
                      src="//player.bilibili.com/player.html?aid=261204747&bvid=BV1je411j7SY&cid=874049816&p=1"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="category-name">Commercial Drone Film</h2>
                </Link>
              </div>
              <div className="col-md-5 text-center">
                <Link
                  to="/VideoProductionPortfolio/VideoLandscape"
                  className="photo-portfolio-link"
                >
                  <div className="video-showcase-FL responsive-iframe-container">
                    <iframe
                      title="RI-Video"
                      src="//player.bilibili.com/player.html?aid=1100791250&bvid=BV1GA4m137qu&cid=1444839312&p=1"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="category-name">Video Landscape</h2>
                </Link>
              </div>
              <div className="col-md-5 text-center">
                <Link
                  to="/VideoProductionPortfolio/wedding"
                  className="photo-portfolio-link"
                >
                  <div className="video-showcase-FL responsive-iframe-container">
                    <iframe
                      title="FL-Video"
                      src="//player.bilibili.com/player.html?aid=751814264&bvid=BV1nk4y1S7KT&cid=1419434134&p=1"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="category-name">Wedding</h2>
                </Link>
              </div>
              <div className="col-md-5 text-center">
                <Link
                  to="/VideoProductionPortfolio/Vlog"
                  className="photo-portfolio-link"
                >
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
              <div className="col-md-5 text-center">
                <Link
                  to="/VideoProductionPortfolio/VideoArtFilm"
                  className="photo-portfolio-link"
                >
                  <div className="video-showcase-Harvard responsive-iframe-container">
                    <iframe
                      title="Harvard-2023-Lunar-Festival"
                      src="//player.bilibili.com/player.html?aid=1051259648&bvid=BV16H4y1L7NR&cid=1456139954&p=1"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="category-name">Art Film</h2>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProductionPortfolio;
