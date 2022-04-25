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
            <a href="#connect">Mint</a>
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
            <a href="#episodes">Episodes</a>
          </li>
          <li>
            <a href="https://hollywooddao.notion.site/hDAO-White-Paper-v2-63a386ec28364c9485446fb27826c8c0" target="_blank">Whitepaper</a>
          </li>
          <li>
            <a href="https://twitter.com/timewreckednft" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://opensea.io/collection/timewrecked" target="_blank">Opensea</a>
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
