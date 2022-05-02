import React from "react";
import Header from "./Header";
import main_banner_img from "../global/assets/main_banner_img.png";
import small_circle_left from "../global/assets/cloud_sm_left.png";
import cloud_sm_bottom from "../global/assets/cloud_sm_bottom.png";
import cloud_right from "../global/assets/cloud_right.png";
const MainBanner = () => {

  const btnClickDiscord = () => {
    window.open("https://twitter.com/nexthollywood_");
  };

  
  return (
    <div className="MainBanner">
      <Header />
      <div className="banner_content ">
        <img src={small_circle_left} className="small_circle_left" alt="" />
        <img src={cloud_sm_bottom} className="cloud_sm_bottom" alt="" />
        <img src={cloud_right} className="cloud_right" alt="" />
        <div className="presentation">
          <h1>We're gonna make a TV show</h1>
          <p>
            Directly support your favorite creators by helping bring this
            animated series to life. Buy a digital collectible, and help the
            show get made.
          </p>
          <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            btnClickDiscord();
            }}>
              join our server</button>

              <a href="#connect">
            <button>mint</button>
          </a>
        </div>
        <img src={main_banner_img} className="main_banner_img" alt="" />
      </div>
    </div>
  );
};
export default MainBanner;
