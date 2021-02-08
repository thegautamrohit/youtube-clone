import React from "react";
import "./RecommendedVideos.css";
import Frame from "./Frame/Frame";
import VideoList from "./VideoList/VideoList";

function RecVideos({ selectedVideo, videos, videoSelect }) {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__videos">
        <Frame video={selectedVideo} />
        <VideoList videos={videos} videoSelect={videoSelect} />
      </div>
    </div>
  );
}

export default RecVideos;
