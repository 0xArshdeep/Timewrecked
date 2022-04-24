import React from "react";
import first from "../global/assets/q2.png";
import third from "../global/assets/q3.png";
import fourth from "../global/assets/q4.png";

import small_road_cloud_first from "../global/assets/small_road_cloud_first.png";
import road_map_big_cloud from "../global/assets/road_map_big_cloud.png";
import third_small_clouds from "../global/assets/third_small_clouds.png";
import white_cloud_road from "../global/assets/white_cloud_road.png";
import road_map_mahal from "../global/assets/road_map_mahal.png";

import road from "../global/assets/road.png";
import bottom_road_map from "../global/assets/bottom_road_map.png";
const RoadMap = () => {
  return (
    <div className="RoadMap">
      <img
        src={small_road_cloud_first}
        className="small_road_cloud_first"
        alt=""
      />
      <img src={road_map_big_cloud} className="road_map_big_cloud" alt="" />
      <img src={third_small_clouds} className="third_small_clouds" alt="" />
      <img src={road} className="road" alt="" />
      <img src={white_cloud_road} className="white_cloud_road" alt="" />
      <img src={road_map_mahal} className="road_map_mahal" alt="" />

      <img src={bottom_road_map} className="bottom_road_map" alt="" />
      <div className="content_area common_width">
        <h1>ROADMAP</h1>
        <div className="grid_area">
          <div className="box ml_auto">
            <div className="top_area">
              <img src={first} alt="" />
              <h1>Mint</h1>
            </div>
            <p>
              The initial mint sale will directly fund production of Timewrecked
            </p>
          </div>

          <div className="box">
            <div className="top_area">
              <img src={first} alt="" />
              <h1>events & rewards</h1>
            </div>
            <p>
              Timewrecked will begin hosting IRL events. Holders will be
              rewarded for early adoption & vote on allocation of the community
              treasury.
            </p>
          </div>

          <div className="box ml_auto">
            <div className="top_area">
              <img src={first} alt="" />
              <h1>production</h1>
            </div>
            <p>
              The community will begin to collaborate with Timewrecked executive
              producers/showrunners Keetgi Kogan and David H. Steinberg, along
              with other members of the production.
            </p>
          </div>

          <div className="box">
            <div className="top_area">
              <img src={third} alt="" />
              <h1>metaverse</h1>
            </div>
            <p>
              We will open the doors to Timewreckedland, a place for film
              enthusiasts and degens alike.
            </p>
          </div>

          <div className="box ml_auto">
            <div className="top_area">
              <img src={fourth} alt="" />
              <h1>premiere </h1>
            </div>
            <p>
              We will begin sharing the animated pilot with possible
              distribution partners for licensing opportunities to reach a wider
              audience.
            </p>

            <div className="button_wrapper">
              <button>About</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoadMap;
