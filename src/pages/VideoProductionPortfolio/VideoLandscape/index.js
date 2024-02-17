// BEGIN: Import necessary libraries
import React from "react";
// END: Import necessary libraries

// BEGIN: Define the Landscape component
const VideoLandscape = () => {
  return (
    <div className="video-portfolio container">
      <h1 className="title text-center py-4">Video Landscape</h1>
      <div className="video-showcase-FL responsive-iframe-container">
        <iframe
          src="//player.bilibili.com/player.html?aid=603690138&bvid=BV14B4y1E7p8&cid=874269826&p=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
          {" "}
        </iframe>
      </div>
      <a
        href="https://www.bilibili.com/video/BV14B4y1E7p8/?vd_source=29129ec6466690e99722869f8f8689c0"
        className="video-link_uiuc "
      >
        <h4 className="category-name text-center py-4">Vero, FL</h4>
      </a>
    </div>
  );
};
// END: Define the Landscape component

export default VideoLandscape;
