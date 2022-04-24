import React, { useState } from 'react';
import MainBanner from '../components/MainBanner';
import VideoArea from '../components/VideoArea';
import RoadMap from '../components/RoadMap';
import WhatIsThis from '../components/WhatIsThis';
import Team from '../components/Team';
import About from '../components/About';
import Episode from '../components/Episode';
import Collectibles from '../components/Collectibles';
import Visuals from '../components/Visuals';
import Characters from '../components/Characters';
import Funded from '../components/Funded';
import LeatherBoard from '../components/LeatherBoard';
import Tiers from '../components/Tiers';
import Footer from '../components/Footer';
import '../global/styles/Landing.css';
import { EpisodePara } from '../components/constant';
import NollywoordTeam from '../components/NollywoordTeam';
import episodes_main from '../global/assets/episodes_main.png';
import MediaFeedback from '../components/MediaFeedback';
import ep2 from '../global/assets/ep2.png';
import ep3 from '../global/assets/ep3.png';
import ep5 from '../global/assets/ep5.png';
import ep7_8 from '../global/assets/ep7_8.png';
import s_2 from '../global/assets/s_2.png';
import s_3 from '../global/assets/s_3.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
  const [showepisode, setshowepisode] = useState(false);
  return (
    <div>
      <MainBanner />
      <VideoArea />
      <RoadMap />
      <Tiers />
      <Funded />
      <LeatherBoard />
      <WhatIsThis />
      <About />
      <Team />
      <Visuals />
      <Characters />
      <Episode
        setshowepisode={setshowepisode}
        showepisode={showepisode}
        img={episodes_main}
        view_button={true}
        heading='Season One Overview'
        para_list={EpisodePara[0]}
      />
      {showepisode && (
        <>
          <Episode img={ep2} heading='Episode 2' para_list={EpisodePara[1]} />
          <Episode img={ep3} heading='Episode 3' para_list={EpisodePara[2]} />
          <Episode img={null} heading='Episode 4' para_list={EpisodePara[3]} />
          <Episode img={ep5} heading='Episode 5' para_list={EpisodePara[4]} />
          <Episode img={null} heading='Episode 6' para_list={EpisodePara[5]} />
          <Episode
            img={ep7_8}
            heading='Season Finale Episodes 7 & 8'
            para_list={EpisodePara[6]}
          />

          <Episode img={s_2} heading='Season Two' para_list={EpisodePara[7]} />
          <Episode
            img={s_3}
            heading='Season Three and Beyond…'
            para_list={EpisodePara[7]}
          />
        </>
      )}

      <NollywoordTeam />
      <Collectibles />
      <MediaFeedback />
      <Footer />

      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </div>
  );
};
export default Landing;
