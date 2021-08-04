import React, {useEffect, useState} from 'react';
import LkDashbord from "../hoc/LkDashbord";
import PersonData from "../components/PersonData";
import LkHeaderContent from '../hoc/LkHeaderContent';
import Image from "next/image";
import bgImg from '../public/assets/img/cartBg.png'
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import { fetchWeaponsThunk } from '../redux/slices/UserSlice';
import {ParsedUrlQuery} from "querystring";
import {useDispatch} from "react-redux";

const Home: NextPage<any> = (props) => {

  useEffect(() => {
    console.log(props)
  })

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


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context.resolvedUrl)
//   return {
//     props: {context: {text: "ahaha"}}, // will be passed to the page component as props
//   }
// }

// // @ts-ignore
// export const getInitialProps = async (ctx) => {
//   console.log('ctx', ctx)
//   return {
//     lol: "lol"
//   }
// }

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // console.log(context)

  const posts = {
    test: "1",
    ahah: "2 pazana"
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home;

