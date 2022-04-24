import React from "react";
import first_char from "../global/assets/first_char.png";
const Characters = () => {
  return (
    <div className="Characters">
      <div className="content_area common_width">
        <h1>Characters</h1>

        <p>Family Lineup</p>

        <img src={first_char} alt="" />

        <div className="button_wrapper">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};
export default Characters;
