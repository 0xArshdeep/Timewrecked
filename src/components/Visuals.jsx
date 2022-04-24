import React from "react";
import visual from "../global/assets/visual.png";
import visualwave from "../global/assets/visualwave.png";

const Visuals = () => {
  return (
    <div className="visuals">
      <div className="content_area common_width">
        <h1>VISUALs</h1>
        <img src={visual} alt="" />
        <p>
          The visual style of the show is based on the concept of collage, which
          is something we have never seen on television or even in feature
          animation. The modern family is drawn completely differently than the
          characters of medieval times. But we go on to juxtapose the characters
          with photorealistic animals and painterly backgrounds that give the
          show a mixed-media palate that is truly distinctive, unique, and
          thematic.
        </p>
      </div>

      <img src={visualwave} alt="" />
    </div>
  );
};
export default Visuals;
