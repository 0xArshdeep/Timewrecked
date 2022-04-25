import React, { useState } from "react";
import play_button from "../global/assets/play_button.png";
import second_cloud from "../global/assets/second_cloud.png";
import castle_second_big from "../global/assets/castle_second_big.png";
import second_small_castle from "../global/assets/second_small_castle.png";
import video from "../videos/animatic.mp4";
import poster from "../global/assets/video.png";
const VideoArea = () => {
  const [videoState, setVideo] = useState(false);
  return (
    <div className="VideoArea">
      <img src={second_cloud} className="second_cloud" alt="" />
      <img src={castle_second_big} className="castle_second_big" alt="" />
      <img src={second_small_castle} className="second_small_castle" alt="" />
      <div className="content_area common_width">
        <div className="video_wrapper">
          <video
            src={video}
            controls
            className={videoState && "active"}
            onEnded={(e) => {
              setVideo(false);
            }}
          />
          {!videoState && <img src={poster} className="poster_img" />}

          <img
            src={play_button}
            className={`play_button ${videoState && "active"}`}
            alt=""
            onClick={(e) => {
              setVideo(true);
              document.querySelector("video").play();
            }}
          />
        </div>
        <p>
          When a modern family gets stuck in the time of Henry VIII, they do
          whatever it takes to survive, including trading their knowledge of the
          future in exchange for not getting murdered!
        </p>
      </div>
    </div>
  );
};
export default VideoArea;
