import React from "react";
import VideoCard from "../../VideoCard/VideoCard";

const VideoList = ({ videos, videoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoCard key={id} video={video} videoSelect={videoSelect} />
  ));

  return <div className="videoList">{listOfVideos}</div>;
};

export default VideoList;
