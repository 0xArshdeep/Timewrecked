import React from "react";
import c1 from "../global/assets/first_team_cloud.png";
import c2 from "../global/assets/second_team_cloud.png";
import c3 from "../global/assets/third_team_cloud.png";
import c4 from "../global/assets/fourth_team_cloud.png";
import c5 from "../global/assets/five_team_cloud.png";
import c6 from "../global/assets/six_team_cloud.png";
const NollywoordTeam = () => {
  return (
    <div className="NollywoordTeam">
      <img src={c1} alt="" />
      <img src={c2} alt="" />
      <img src={c3} alt="" />
      <img src={c4} alt="" />
      <img src={c5} alt="" />

      <div className="content common_width">
        <h1>NEXthollywood team</h1>
        <div className="box">
          <h1>DAVE "D.C." CASSIDY</h1>
          <p>
            DAVE "D.C." CASSIDY Writer/producer and founder of animation and
            production company Diamond Entertainment. Military and startup
            veteran, he received a direct presidential nomination to West Point
            while active duty in the U.S. Army. D.C. has launched ventures in
            both hollywood and silicon valley.
          </p>
        </div>
        <div className="box">
          <h1>ALLISON HEINE</h1>
          <p>
            ALLISON HEINE Runs design, community, and marketing for
            nexthollywood. Allison broke into the creative industry by directing
            her first film at 15-years-old, leading to an influential rise as a
            cinematographer, and starting and running her own successful
            event-focused film and production company. On the side, she started
            her own tiktok where she shares life insights with more than 160,000
            fans. Allison is a longtime NFT collector and metaverse proponent.
          </p>
        </div>

        <div className="box_grid">
          <div className="box">
            <h1>EMILY ROBBIE</h1>
            <p>
              EMILY ROBBIE Leads social media and creator outreach for
              nexthollywood and our first project: timewrecked. An experienced
              tiktok and instagram creator with tens of thousands of followers,
              she’s born and raised in greater Los Angeles, California.
            </p>
          </div>
          <div className="box">
            <h1>MICHAEL FISK</h1>
            <p>
              MICHAEL FISK Senior marketing executive in the Entertainment
              industry having spearheaded over 450 marketing campaigns for
              studios like Sony Pictures, Lionsgate, NBC Universal, Warner Bros.
              and MGM. He’s worked on: James Bond’s No Time To Die, Spider-Man,
              La La Land, Crazy Rich Asians, A Star Is Born, and Aquaman. He is
              also Co-Founder of the Business Of Creating panel series which
              educates and empowers content creators across all platforms (film,
              tv, digital)
            </p>
          </div>
        </div>

        <div className="box_grid">
          <div className="box">
            <h1>JEREMY LATCHAM</h1>
            <p>
              JEREMY LATCHAM Executive produced some of the most influential
              superhero films of the 2010s: "The Avengers" (2012), "Guardians of
              the Galaxy" (2014), and "Spider-Man: Homecoming"(2017). After
              having served as Senior Vice President at Marvel Studios he now is
              producing the blockbuster film DUNGEONS & DRAGONS with Hasbro and
              eOne.
            </p>
          </div>
          <div className="box">
            <h1>EBEN DAVIDSON</h1>
            <p>
              EBEN DAVIDSON Former Blumhouse exec via Paramount; SVP Development
              for television: oversaw productions for Netflix, Amazon, and BET.
              At Paramount Pictures, worked on eight Oscar- nominated films
              including Arrival, Florence Foster Jenkins and Anomalisa among
              others.
            </p>
          </div>
        </div>

        <div className="box_grid">
          <div className="box">
            <h1>BRIAN J WHITE</h1>
            <p>
              BRIAN J WHITE Actor who has appeared in a number of films,
              including Stomp The Yard, The Game Plan, 12 Rounds, and The Cabin
              in the Woods. On television, White was the love interest to Olivia
              Pope in Shonda Rhimes’ Scandal.
            </p>
          </div>
          <div className="box">
            <h1>RAHUL RANA</h1>
            <p>
              RAHUL RANA Author of “Making Moonshots,” a deep dive into the
              mindsets, philosophies, and strategies that are conducive to
              building moonshot companies. Rana has been Featured in/associated
              with Business Insider, The New York Times, and Undergrad Venture
              Summit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NollywoordTeam;
