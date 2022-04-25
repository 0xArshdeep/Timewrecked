import React from "react";
import play_button from "../global/assets/play_button.png";
import second_cloud from "../global/assets/second_cloud.png";
import castle_second_big from "../global/assets/castle_second_big.png";
import second_small_castle from "../global/assets/second_small_castle.png";
import ReactPlayer from "react-player";

import {useState } from "react";

const VideoArea = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="VideoArea">
      <img src={second_cloud} className="second_cloud" alt="" />
      <img src={castle_second_big} className="castle_second_big" alt="" />
      <img src={second_small_castle} className="second_small_castle" alt="" />
      <div className="content_area common_width">
        <div className="video_wrapper">
          <ReactPlayer
              url="../global/assets/animatic.mov"
              light="../global/assets/video.png"
              onClickPreview={() => setPlaying(true)}
              playing={playing}
              onPause={() => {
                setPlaying(false);
              }}
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              width="100%"
              height="100%"
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
