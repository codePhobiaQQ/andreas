import React, { useState } from "react";

interface InputProps {
  label?: string;
  id: string;
  value: any;
  onChange: any;
}

const InputCustom = ({ label, id, value, onChange }: InputProps) => {
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
