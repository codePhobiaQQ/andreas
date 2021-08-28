import React, { useEffect, useState } from "react";

interface InputProps {
  label?: string;
  id: string;
  value: any;
  onChange: any;
  defaultVal?: string;
}

const InputCustom = ({
  label,
  id,
  value,
  onChange,
  defaultVal,
}: InputProps) => {
  useEffect(() => {
    defaultVal ? onChange(defaultVal) : null;
  }, []);

  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        type="text"
        id={id}
      />
    </div>
  );
};

export default InputCustom;
