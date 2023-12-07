
import React from 'react';

const Vlog = () => {
  return (
    <div className="video-portfolio container">
        <h1 className="title text-center py-4">Vlog</h1>
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
      <a
        href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0"
        className="video-link_uiuc "
      >
        <h4>University of Illinois Urbana-Champaign</h4>
      </a>
    </div>
  );
};

export default Vlog;
