import React from "react";
import PropTypes from "prop-types";

import "./VideoYoutube.scss";
export const VideoYoutube = ({ videoId, title }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <div className="videoWrapper">
        <iframe
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&hd=1`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
};
VideoYoutube.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string,
};
