
// BEGIN: Import necessary libraries
import React from 'react';
// END: Import necessary libraries

// BEGIN: Define the Landscape component
const VideoLandscape = () => {
  return (
    <div className="video-portfolio container">
      <h1 className="title text-center py-4">Video Landscape</h1>
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
      <a
        href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0"
        className="video-link_uiuc "
      >
        <h4 className="category-name text-center py-4">Vero, FL</h4>
      </a>
    </div>
  );
};
// END: Define the Landscape component

export default VideoLandscape;
