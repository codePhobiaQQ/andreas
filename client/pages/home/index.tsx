import React, { useEffect, useState } from "react";
import LkDashbord from "../../hoc/LkDashbord";
import LkHeaderContent from "../../hoc/LkHeaderContent";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import VideoServices from "../../services/video.services";
import { IVideo } from "../../models/IVideo";
import Card from "../../components/Card";
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
        {videos?.map((card, key) => (
          <Card key={key} card={card} />
        ))}
      </div>
    </LkDashbord>
  );
};

export default Index;

// export async function getServerSideProps<GetServerSideProps>(context: any) {
//   const products = await fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  const videos: IVideo[] = await VideoServices.getAll();
  console.log(videos);
  if (!videos) {
    return { props: {} };
  }
  return {
    props: { videos },
  };
};
