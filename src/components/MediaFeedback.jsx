import React from "react";
import press_mention from "../global/assets/press_mention.png";
import internation_times from "../global/assets/internation_times.png";
import grid_logo_1 from "../global/assets/grid_logo_1.png";
import grid_logo_2 from "../global/assets/grid_logo_2.png";
import grid_logo_3 from "../global/assets/grid_logo_3.png";
const MediaFeedback = () => {
  return (
    <div className="MediaFeedback">
      <div className="content common_width">
        <h1>“The media is loving Timewrecked”</h1>
        <p>
          We are creating a show with <span>no studio</span>,
          <span>no gatekeepers</span>,<span> no suits </span> and the media is
          loving it.
        </p>

        <div className="img_wrapper">
          <img src={press_mention} alt="" />
        </div>
        <div className="img_wrapper">
          <img src={internation_times} alt="" />
        </div>
        <div className="grid_wrapper">
          <img src={grid_logo_1} alt="" />
          <img src={grid_logo_2} alt="" />
          <img src={grid_logo_3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default MediaFeedback;
