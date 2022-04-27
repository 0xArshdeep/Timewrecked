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
          <a href="https://www.ibtimes.com/could-nfts-be-future-financing-3442316" target="_blank">
            <img src={internation_times} alt="" />
          </a>
        </div>
        <div className="grid_wrapper">
          <a href="https://decrypt.co/90814/how-daos-nfts-and-defi-are-disrupting-hollywood" target="_blank">
            <img src={grid_logo_1} alt="" />
          </a>
          <a href="https://www.investvoyager.com/blog/lights-crypto-action" target="_blank">
            <img src={grid_logo_2} alt="" />
          </a>
          <img src={grid_logo_3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default MediaFeedback;
