import React, { useState } from "react";
import { AddVideoI } from "../../pages/add-video";

interface InputProps {
  label?: string;
  id: string;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  name: string;
}

const InputCustom = ({ name, label, id, value, setValue }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        value={value[name]}
        onChange={(e) => setValue({ ...value, [name]: e.target.value })}
        type="text"
        id={id}
      />
    </div>
  );
};

export default InputCustom;
