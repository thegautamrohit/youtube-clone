import React from "react";
import "./VideoCard.css";

function VideoCard({ video, videoSelect }) {
  const dateStr = video.snippet.publishedAt;

  const date = dateStr.split("");
  const finalDate = date.splice(0, 10);
  return (
    <div className="videoCard" onClick={() => videoSelect(video)}>
      <img
        className="videoCard__thumbnail"
        alt=""
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="videoCard__info">
        <div className="videoCard__text">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.channelTitle}</p>
          <p> {finalDate}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
