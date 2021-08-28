import { IVideo } from "../models/IVideo";
import Video from "./videoplayer/Video";
import InputCustom from "./UI/InputCustom";
import { useInput } from "../hooks/useInput";
import { useState } from "react";

interface IEditCart {
  card: IVideo;
}

const EditCart = ({ card }: IEditCart) => {
  const Title = useInput("");
  const Price = useInput(0);
  const Description = useInput("");
  const Level = useInput("basic");
  const Category = useInput("dance");

  const [video, setVideo] = useState<File>();
  const [preview, setPreview] = useState<File>();
  const [bigImg, setBigImg] = useState<File>();

  return (
    <>
      <hr />
      <div>
        <Video video={card} />
        <div>
          <img
            width={150}
            height={150}
            src={`http://localhost:5000/${card.bigImg}`}
          />
          <InputCustom id="bigImg1" label="bigImg1" {...Title} />
        </div>
        <div>
          <img
            width={150}
            height={150}
            src={`http://localhost:5000/${card.preview}`}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default EditCart;
