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
            <a href="#mint">Mint</a>
          </li>
          <li>
            <a href="#leaderboard">Leaderboard</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#team">Creators / Team</a>
          </li>
          <li>
            <a href="#visual">Visual Overview</a>
          </li>
          <li>
            <a href="#characters">Characters</a>
          </li>
          <li>
            <a href="#episodes">Episodes</a>
          </li>
          <li>
            <a href="#collectibles">Why Collectibles?</a>
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
