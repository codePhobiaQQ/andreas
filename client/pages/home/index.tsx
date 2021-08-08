import React, { useEffect, useState } from "react";
import LkDashbord from "../../hoc/LkDashbord";
import LkHeaderContent from "../../hoc/LkHeaderContent";
import { GetStaticProps, NextPage } from "next";
import VideoServices from "../../services/video.services";
import { IVideo } from "../../models/IVideo";
import Card from "../../components/Card";

interface HomeProps {
  videos?: IVideo[];
}

const Index: NextPage<HomeProps> = ({ videos }) => {
  const [activeFilter, setActiveFilter] = useState(1);

  // useEffect(() => {
  // }, []);

  return (
    <LkDashbord>
      <LkHeaderContent />
      {/*<div className="contentData">*/}
      {/*  {videos.map((card, key) => (*/}
      {/*    <Card key={key} card={card} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </LkDashbord>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const videos: IVideo[] = await VideoServices.getAll();
//   return {
//     props: { videos },
//   };
// };

export default Index;
