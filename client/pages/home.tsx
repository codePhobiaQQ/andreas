import React, { useEffect, useState } from "react";
import LkDashbord from "../hoc/LkDashbord";
import LkHeaderContent from "../hoc/LkHeaderContent";
import Image from "next/image";
import bgImg from "../public/assets/img/cartBg.png";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import VideoServices from "../services/video.services";

const Home: NextPage<any> = ({ videos, children }) => {
  const [activeFilter, setActiveFilter] = useState(1);

  useEffect(() => {
    console.log(typeof videos);
    console.log(videos);
  });

  const cards = [
    {
      imgSrc: bgImg,
    },
    {
      imgSrc: bgImg,
    },
    {
      imgSrc: bgImg,
    },

    {
      imgSrc: bgImg,
    },
  ];

  return (
    <LkDashbord>
      <LkHeaderContent />
      <div className="contentData">
        {/*{videos.map((card, key) => (*/}
        {/*  <div className="card" key={key}>*/}
        {/*    <Image src={card.imgSrc} width={268} height={409} alt="cart" />*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </LkDashbord>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const videos = await VideoServices.getAll();
//   return {
//     props: { videos }, // will be passed to the page component as props
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  const videos = await VideoServices.getAll();
  const final = JSON.parse(JSON.stringify(videos));
  return {
    props: { videos: final },
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//
//   // console.log(context)
//
//   const posts = {
//     test: "1",
//     ahah: "2 pazana",
//   };
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// };

export default Home;
