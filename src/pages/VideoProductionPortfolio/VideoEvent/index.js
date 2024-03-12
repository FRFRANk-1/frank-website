import React from "react";

const VideoEvent = () => {
  return (
    <div className="video-portfolio container">
      <h1 className="title text-center py-4">Video Event</h1>
      <div className="video-showcase-Harvard responsive-iframe-container">
        <iframe
          src="//player.bilibili.com/player.html?aid=308950125&bvid=BV1sA41167Pz&cid=996740769&p=1"
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
        href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=https://www.bilibili.com/video/BV1sA41167Pz/?spm_id_from=333.999.0.0&vd_source=29129ec6466690e99722869f8f8689c0"
        className="video-link_harvard_2023_lunar_festival"
      >
        <h4 className="category-name text-center py-4">
          2023 Ivy League Spring Festival GALA
        </h4>
      </a>
    </div>
  );
};

export default VideoEvent;
