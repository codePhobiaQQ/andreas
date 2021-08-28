import React, { useEffect, useState } from "react";
import LkDashbord from "../../hoc/LkDashbord";
import LkHeaderContent from "../../hoc/LkHeaderContent";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import VideoServices from "../../services/video.services";
import { IVideo } from "../../models/IVideo";
import Card from "../../components/Card";
import axios from "axios";
import CategoryServices from "../../services/category.services";
import ICategory from "../../models/ICategory";

interface HomeProps {
  videos: IVideo[];
  categories: ICategory[];
}

const Index: NextPage<HomeProps> = ({ videos, categories }) => {
  const [activeFilter, setActiveFilter] = useState(1);

  useEffect(() => {
    console.log(videos);
    console.log(categories);
  }, []);

  return (
    <LkDashbord>
      <LkHeaderContent categories={categories} />
      <div className="contentData">
        {videos?.map((card, key) => (
          <Card key={key} card={card} />
        ))}
      </div>
    </LkDashbord>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps =
  async (): Promise<any> => {
    const videos: IVideo[] = await VideoServices.getAll();
    const categories: ICategory[] = await CategoryServices.getAll();
    return {
      props: { videos, categories },
    };
  };
