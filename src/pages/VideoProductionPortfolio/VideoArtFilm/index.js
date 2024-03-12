import React from "react";

const VideoArtFilm = () => {
  return (
    <div className="video-portfolio container">
      <h1 className="title text-center py-4">Art Film</h1>
      <div className="video-showcase-Harvard responsive-iframe-container">
        <iframe
          src="//player.bilibili.com/player.html?aid=1051259648&bvid=BV16H4y1L7NR&cid=1456139954&p=1"
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
        href="https://www.bilibili.com/video/BV16H4y1L7NR/?spm_id_from=333.999.0.0&vd_source=29129ec6466690e99722869f8f8689c0"
        className="video-link_Daily_Art_In_The_Frame"
      >
        <h4 className="category-name text-center py-4">
          Daily Art Flim
        </h4>
      </a>
    </div>
  );
};

export default VideoArtFilm;
