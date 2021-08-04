import React, { useEffect, useState } from "react";
import LkDashbord from "../hoc/LkDashbord";
import InputCustom from "../components/UI/InputCustom";

export interface AddVideoI {
  Title: string;
  Link: string;
  Preview: any;
  BigImg: any;
  Price: number;
  Description: string;
  level: string;
}

const AddVideo = () => {
  const [value, setValue] = useState<AddVideoI>({
    Title: "",
    Link: "",
    Preview: "",
    BigImg: "",
    Price: 0,
    Description: "",
    level: "basic",
  });

  useEffect(() => {
    console.log(value);
  }, [value]);

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
        id="link"
        label="Link"
        name="Link"
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
