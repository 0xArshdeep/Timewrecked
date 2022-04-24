import React from "react";
import footer_logo from "../global/assets/footer_logo.png";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="content_area common_width">
        <img src={footer_logo} alt="" />
        <p>Powered by NextHollywood.</p>
        <p>
          "NFTs are a game changer for entertainment. It allows content creators more control of their projects AND it also allows fans/audiences to be 
          involved (beyond just commenting on social media). Everyone becomes invested in the success of these soon-to-be told stories.
        </p>
        <p>
          Having a built in audience also signals to the studios that fans are already behind it too. NEXT HOLLYWOOD is the forefront of this new movement within Hollywood. 
          It's the next game changer in the way streamers changed the industry over 10 years ago. But unlike 10 years ago, this is more equitable and transparent. 
        </p>
        <p>
          Stories are part of the human condition, human evolution, and history. It will be exciting to start on this new historic storytelling journey together. “
        </p>
        <p>
          — Michael Fisk, head of marketing at MGM; NextHollywood Investor and Advisor
        </p>
      </div>
    </div>
  );
};
export default Footer;
