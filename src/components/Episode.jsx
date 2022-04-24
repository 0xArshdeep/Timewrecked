import React from "react";

const Episode = ({
  heading,
  para_list,
  view_button,
  img,
  setshowepisode = null,
  showepisode = null,
}) => {
  return (
    <div className="VideoArea Episode" id={view_button && "active"}>
      <div className="content_area common_width">
        {view_button && <h1>EPISODES</h1>}

        <img src={img} alt="" />
        <div className="presentation">
          <h1>{heading}</h1>
          {para_list.map((EachPara) => (
            <p>{EachPara}</p>
          ))}
        </div>
        {view_button && (
          <div className="button_wrapper">
            <button onClick={(e) => setshowepisode(!showepisode)}>
              {showepisode ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Episode;
