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

interface AddVideoProps {
  videos: IVideo[];
}

const AddVideo = ({ videos }: AddVideoProps) => {
  const Title = useInput("");
  const Price = useInput(0);
  const Description = useInput("");
  const Level = useInput("basic");
  const Category = useInput("dance");

  const [video, setVideo] = useState<File>();
  const [preview, setPreview] = useState<File>();
  const [bigImg, setBigImg] = useState<File>();

  const router = useRouter();

  const addVideoHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("price", Price.value);
      formData.append("title", Title.value);
      formData.append("category", Category.value);
      if (video) {
        formData.append("video", video);
      }
      if (preview) {
        formData.append("preview", preview);
      }
      if (bigImg) {
        formData.append("bigImg", bigImg);
      }
      formData.append("description", Description.value);
      formData.append("level", Level.value);
      const response = await VideoServices.addVideo(formData);
      router.push("/home");
      console.log(response.data);
    } catch (e) {
      alert(e.message);
    }
  };

  const [isDisabled, setDisable] = useState<boolean>(true);

  useEffect(() => {
    if (!!Title.value && !!video && !!preview && !!bigImg) {
      setDisable(false);
    }
  }, [video, preview, bigImg, Title, isDisabled]);

  return (
    <LkDashbord>
      <div className="createVideoArea">
        <InputCustom id="title" label="Title" {...Title} />
        <InputCustom id="price" label="Price" {...Price} />
        <InputCustom id="description" label="Description" {...Description} />
        <InputCustom id="level" label="Level" {...Level} />
        <InputCustom id="category" label="Category" {...Category} />

        <FileUpload
          fileName={video?.name || ""}
          label="Add Video"
          setFile={setVideo}
          accept="video/*"
        />
        <FileUpload
          fileName={preview?.name || ""}
          label="Add Preview"
          setFile={setPreview}
          accept="image/*, img/*"
        />
        <FileUpload
          fileName={bigImg?.name || ""}
          label="Add BigImg"
          setFile={setBigImg}
          accept="image/*, img/*"
        />

        <button disabled={isDisabled ? true : false} onClick={addVideoHandler}>
          OK!
        </button>
      </div>
      <div className="allVideos contentData">
        {videos.map((video, index) => {
          return <Card key={index} card={video} />;
        })}
      </div>
    </LkDashbord>
  );
};

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

export default AddVideo;
