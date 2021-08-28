import React, { useEffect, useState } from "react";
import LkDashbord from "../hoc/LkDashbord";
import InputCustom from "../components/UI/InputCustom";
import FileUpload from "../components/UI/FileUpload";
import { useInput } from "../hooks/useInput";
import $api from "../http";
import { useRouter } from "next/router";
import VideoServices from "../services/video.services";
import { GetStaticProps } from "next";
import { IVideo } from "../models/IVideo";
import Card from "../components/Card";
import EditCart from "../components/EditCart";
import EditVideo from "../components/AddVideo/EditVideo";

interface AddVideoProps {
  videos: IVideo[];
}

const AddVideo = ({ videos }: AddVideoProps) => {
  return (
    <LkDashbord>
      <EditVideo main={true} />

      <div className={"AllVideoEdit"}>
        {videos.map((video, index) => {
          return <EditVideo key={index} videoValues={video} main={false} />;
        })}
      </div>
    </LkDashbord>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const videos: IVideo[] = await VideoServices.getAll();
  return {
    props: { videos },
  };
};

export default AddVideo;
