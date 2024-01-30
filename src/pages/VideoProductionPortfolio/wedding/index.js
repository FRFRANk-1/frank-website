import React from "react";

const wedding = () => {
  return (
    <div className="video-portfolio container">
      <h1 className="title text-center py-4">Wedding</h1>
      <div className="video-showcase-FL responsive-iframe-container">
        <iframe
          src="//player.bilibili.com/player.html?aid=751814264&bvid=BV1nk4y1S7KT&cid=1419434134&p=1"
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
        href="https://www.bilibili.com/video/BV1nk4y1S7KT/?vd_source=29129ec6466690e99722869f8f8689c0"
        className="Boston Wedding-BU_1 "
      >
        <h4 className="category-name text-center py-4">Boston Wedding, Cambridge 2024</h4>
      </a>
    </div>          
  );
};

export default wedding;
