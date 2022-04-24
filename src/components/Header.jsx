import React, { useState } from "react";
import burger from "../global/assets/burger_icon.png";
import "../global/styles/Header.css";
const Header = () => {
  const [Active, setActive] = useState(false);
  return (
    <div className="header">
      <div className="common_width">
        <nav className={Active && "active"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Mint</a>
          </li>
          <li>
            <a href="">Leaderboard</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Creators / Team</a>
          </li>
          <li>
            <a href="">Visual Overview</a>
          </li>
          <li>
            <a href="">Characters</a>
          </li>
          <li>
            <a href="">Episodes</a>
          </li>
          <li>
            <a href="">Why Collectibles?</a>
          </li>
        </nav>
        <div className="burger_icon" onClick={(e) => setActive(!Active)}>
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
