import React from "react";
import mask_box from "../global/assets/what_mask.png";
import times from "../global/assets/times.png";
import cloud_what from "../global/assets/cloud_what.png";
const WhatIsThis = () => {
  return (
    <div className="WhatIsThis">
      <img src={cloud_what} alt="" />
      <div className="content_area common_width">
        <h1>What is this?</h1>

        <div className="box_wrapper">
          <div className="box">
            <img src={mask_box} alt="" />
            <p>
              Timewrecked is an animated half-hour comedy for adults and kids
              alike!
            </p>
          </div>
          <div className="box">
            <img src={times} alt="" />
            <p>
              Timewrecked asks the question, What would you do to survive in
              medieval times?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatIsThis;
