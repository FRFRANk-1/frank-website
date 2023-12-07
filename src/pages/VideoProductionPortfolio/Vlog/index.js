
import React from 'react';

const Vlog = () => {
  return (
    <div className="video-portfolio container">
        <h1 className="title text-center py-4">Vlog</h1>
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
      <a
        href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0"
        className="video-link_uiuc "
      >
        <h4 className='category-name text-center py-4'>Florida-Key West</h4>
      </a>
    </div>
  );
};

export default Vlog;
