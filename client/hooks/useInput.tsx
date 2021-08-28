import React, { useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    typeof e == "string" ? setValue(e) : setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};
