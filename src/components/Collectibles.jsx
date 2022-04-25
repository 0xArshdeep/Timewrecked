import React from "react";
import card1 from "../global/assets/collect_1.png";
import card2 from "../global/assets/collect_2.png";
import card3 from "../global/assets/collect_3.png";
import collectable from "../global/assets/collectable.png";
const Collectibles = () => {
  return (
    <div className="Collectibles" id="collectibles">
      <img src={collectable} alt="" />
      <div className="content_area common_width">
        <h1>Why Collectibles?</h1>
        <div className="cards_wrapper">
          <div className="card">
            <img src={card1} alt="" />
            <h1>Access</h1>
            <p>
              Fans never lose access to the content they support. As long as
              they hold the collectible, they can enjoy the movies, shows and
              games – forever!
            </p>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <h1>Governance</h1>
            <p>
              The fandom decides which projects are financed based on what it’s
              members want to see. Plus, the community is invited to collaborate
              with creators on creative decisions.
            </p>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <h1>Rewards</h1>
            <p>
              Collectibles are their own reward. Fans can trade them, share them
              with friends and show them off when the content they support
              becomes a mega hit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collectibles;
