import Images from "assets/images";
import {VideoYoutube} from "components";
import React from "react";
import "./Introduction.scss";

const Introduction = () => {
  return (
    <div className="video-intro-wrap" id='guides'>
      <div className="video-intro">
        <img src={Images.Men} alt="" className="men-img" />
        <div className="title">Hướng dẫn vào game</div>
        <VideoYoutube videoId="tzkmSXQQQaQ" />
      </div>
    </div>
  );
};

export default Introduction;
