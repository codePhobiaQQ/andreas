import React, {useState} from 'react';
import LkDashbord from "../hoc/LkDashbord";
import PersonData from "../components/PersonData";
import LkHeaderContent from '../hoc/LkHeaderContent';
import Image from "next/image";
import bgImg from '../public/assets/img/cartBg.png'
import {NextPage} from "next";
import { fetchWeaponsThunk } from '../redux/slices/UserSlice';


const Home: NextPage<any> = (props) => {

  console.log(props)

  const [activeFilter, setActiveFilter] = useState(1)

  const cards = [
    {
      imgSrc: bgImg
    },
    {
      imgSrc: bgImg
    },
    {
      imgSrc: bgImg
    },

    {
      imgSrc: bgImg
    },
  ]

  return (
    <LkDashbord>
      <LkHeaderContent/>
      <div className="contentData">
        {cards.map((card, key) => (
          <div className="card" key={key}>
            <Image src={card.imgSrc} width={268} height={409} alt="cart"/>
          </div>
        ))}
      </div>
    </LkDashbord>
  );
};

Home.getInitialProps = async ctx => {
  console.log(ctx)
  const { dispatch } = ctx.store;
  const res = await dispatch(fetchWeaponsThunk());
  console.log(res)
  return {
    res
  };
};

export default Home;