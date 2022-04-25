import React from "react";
import team_1 from "../global/assets/team_1.png";
import team_2 from "../global/assets/team_2.png";
import team_3 from "../global/assets/team_3.png";
const Team = () => {
  return (
    <div className="Team" id="team">
      <div className="content_area common_width">
        <h1>Creator/team</h1>

        <div className="teams_wrapper">
          <div className="team">
            <img src={team_1} alt="" />
            <div className="presentation">
              <h1>DAVID H. STEINBERG</h1>
              <p>
                DAVID H. STEINBERG is a writer-producer and showrunner in film
                and television. He has ten produced film credits, including
                several in the American Pie franchise as well as Puss in Boots,
                which was nominated for an Academy Award. In television, he
                works extensively in live-action and animation, and he created
                and showran the hit comedy series No Good Nick for Netflix.
              </p>
            </div>
          </div>
          <div className="team">
            <div className="presentation">
              <h1>KEETGI KOGAN</h1>
              <p>
                KEETGI KOGAN is a writer-producer and showrunner in film and
                television. After graduating from USC’s prestigious Peter Stark
                Producing Program, she worked as a development executive before
                segueing into film producing and writing for live-action and
                animation. She was the head writer on the billion-dollar
                franchise Yokai Watch and created and showran the hit comedy
                series No Good Nick for Netflix.
              </p>
            </div>
            <img src={team_2} alt="" />
          </div>
          <div className="team">
            <img src={team_3} alt="" />
            <div className="presentation">
              <h1>Mark Risley</h1>
              <p>
                MARK RISLEY, director and executive producer, is a multiple Emmy-Award-winning director specializing in animated film 
                and television. In his long and successful career he has produced and directed such hit shows as Rugrats, The Wild Thornberrys, 
                As Told By Ginger, The Mr. Men Show, and the billion-dollar anime franchise Yokai Watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
