import React from "react";
import Spinner from "../../Spinner/Spinner";
import "./Frame.css";

const Frame = ({ video }) => {
  if (!video) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video_container">
      <div className="iframe">
        <iframe
          title="Video Player"
          height="100%"
          width="100%"
          border="0"
          src={videoSrc}
        />
      </div>

      <h2>{video.snippet.title}</h2>
      <h4>{new Date(video.snippet.publishedAt).toDateString()}</h4>
      <div className="subscribe">
        <h2>{video.snippet.channelTitle}</h2>
        <button>SUBSCRIBE</button>
      </div>

      <p>{video.snippet.description}</p>
    </div>
  );
};

export default Frame;
