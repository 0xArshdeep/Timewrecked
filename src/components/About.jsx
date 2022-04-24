import React from "react";
import about_wave from "../global/assets/about_wave.png";
import axios from 'axios'
import fileDownload from 'js-file-download'

const About = () => {

  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

  return (
    <div className="About">
      <img src={about_wave} alt="" />
      <div className="content_area common_width">
        <h1>About</h1>
        <p>
          In our pilot episode, Evan Johnson, a theoretical physicist, builds a
          time machine so his new wife Adriana Zapata, a self-assured
          anthropologist, can study cavemen. But instead, they get stuck in
          medieval times with Adriana’s teenage children Lucas and Isabella, the
          confident player and the bookish intellectual.
        </p>
        <p>
          Cut to three months later and they’re the Duke and Duchess of
          Pasadena, in the court of Henry VIII, trading their knowledge of
          future technology in exchange for some land, a title, and not getting
          murdered. While each week they gather the resources necessary to
          rebuild the time machine and get home, this thoroughly modern family
          does what they have to do to survive.
        </p>
        <div className="button_wrapper">
          <button onClick={() => {handleDownload('http://localhost:3000/src/global/assets/Timewrecked.pdf', 'Timewrecked.pdf')
          }}>Download Pilot Script</button>
        </div>
      </div>
    </div>
  );
};
export default About;
