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
    (async () => {
      const response = await axios.get("http://localhost:5000/video/get-all");
      const result = response.data;
      console.log(result);
    })();
  }, []);

  useEffect(() => {
    console.log(videos);
  }, []);

  return (
    <LkDashbord>
      <LkHeaderContent />
      <div className="contentData">
        {videos?.map((card, key) => (
          <Card key={key} card={card} />
        ))}
      </div>
    </LkDashbord>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const videos: IVideo[] = await VideoServices.getAll();
  if (!videos) {
    return { props: {} };
  }
  return {
    props: { videos },
  };
};

export default Index;
