import React, {useState} from 'react';
import LkDashbord from "../hoc/LkDashbord";
import PersonData from "../components/PersonData";
import LkHeaderContent from '../hoc/LkHeaderContent';
import bgImg from './../assets/img/cartBg.png'


const Home = () => {

  const [activeFilter, setActiveFilter] = useState(1)

  const cards = [
    {
      imgSrc: bgImg.src
    },
    {
      imgSrc: bgImg.src
    },
    {
      imgSrc: bgImg.src
    },

    {
      imgSrc: bgImg.src
    },
  ]

  return (
    <LkDashbord>
      <LkHeaderContent/>
      <div className="contentData">
        {cards.map((card, key) => (
          <div className="card" key={key}>
            <img src={card.imgSrc} alt="cart"/>
          </div>
        ))}
      </div>
    </LkDashbord>
  );
};

export default Home;