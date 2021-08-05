import React, { useEffect, useState } from "react";
import LkDashbord from "../hoc/LkDashbord";
import InputCustom from "../components/UI/InputCustom";

export interface AddVideoI {
  Title: string;
  Video: string;
  Preview: any;
  BigImg: any;
  Price: number;
  Description: string;
  Level: string;
}

const AddVideo = () => {
  const [value, setValue] = useState<AddVideoI>({
    Title: "",
    Video: "",
    Preview: "",
    BigImg: "",
    Price: 0,
    Description: "",
    Level: "basic",
  });

  useEffect(() => {
    console.log(value);
  }, [value]);

  const addVideoHandler = () => {
    const formData = new FormData();
    formData.append("Title", value.Title);
    formData.append("Video", value.Video);
    formData.append("Preview", value.Preview);
    formData.append("BigImg", value.BigImg);
    // formData.append("Price", value.Price);
    formData.append("Description", value.Description);
    formData.append("Level", value.Level);
  };

  return (
    <LkDashbord>
      <InputCustom
        id="title"
        label="Title"
        name="Title"
        value={value}
        setValue={setValue}
      />
      <InputCustom
        id="video"
        label="Video"
        name="Video"
        value={value}
        setValue={setValue}
      />
      <InputCustom
        id="preview"
        label="Preview"
        name="Preview"
        value={value}
        setValue={setValue}
      />
      <InputCustom
        id="big-img"
        label="BigImg"
        name="BigImg"
        value={value}
        setValue={setValue}
      />
      <InputCustom
        id="price"
        label="Price"
        name="Price"
        value={value}
        setValue={setValue}
      />
      <InputCustom
        id="description"
        label="Description"
        name="Description"
        value={value}
        setValue={setValue}
      />
      <InputCustom
        id="level"
        label="Level"
        name="Level"
        value={value}
        setValue={setValue}
      />
      <button>ADD VIDEO</button>
    </LkDashbord>
  );
};

export default AddVideo;
