import React, { useEffect, useState } from "react";
import LkDashbord from "../../hoc/LkDashbord";
import LkHeaderContent from "../../hoc/LkHeaderContent";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import VideoServices from "../../services/video.services";
import { IVideo } from "../../models/IVideo";
import Card from "../../components/Card";
import processHTML from "next/dist/next-server/lib/post-process";
import axios from "axios";

interface HomeProps {
  videos?: IVideo[];
}

const Index: NextPage<HomeProps> = ({ videos }) => {
  const [activeFilter, setActiveFilter] = useState(1);

  useEffect(() => {
    console.log(videos, 1);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5000/video/get-all");
      console.log(response);
      const test = response.data;
      console.log(test);
    })();
  });

  return (
    <LkDashbord>
      <LkHeaderContent />
      <div className="contentData">
        1
        {videos?.map((card, key) => (
          <Card key={key} card={card} />
        ))}
      </div>
    </LkDashbord>
  );
};

export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  const videos: IVideo[] = await VideoServices.getAll();
  if (!videos) {
    return { props: {} };
  }
  return {
    props: { videos },
  };
};

export default Index;
