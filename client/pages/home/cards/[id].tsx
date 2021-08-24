import { GetServerSideProps } from "next";
import { IVideo } from "../../../models/IVideo";
import VideoServices from "../../../services/video.services";
import LkHeaderContent from "../../../hoc/LkHeaderContent";
import LkDashbord from "../../../hoc/LkDashbord";
import React, { useEffect } from "react";
import Video from "../../../components/videoplayer/Video";
import LkVideoContent from "../../../hoc/LkVideoContent";

interface CardPageInterface {
  video: IVideo;
}

const CardPage = ({ video }: CardPageInterface) => {
  useEffect(() => {
    console.log(video);
  }, []);
  return (
    <LkDashbord>
      <LkVideoContent />
      <Video video={video} />
    </LkDashbord>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const video: IVideo = await VideoServices.getOne(Number(context.params?.id));
  if (!video) {
    return { props: {} };
  }
  return {
    props: { video },
  };
};

export default CardPage;
