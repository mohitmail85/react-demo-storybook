import React, { ChangeEvent } from "react";

export interface InputProps {
  value: string;
  onChange: (text: string) => void;
  fontSize: string;
  fontColor: string;
  size?: "small" | "medium" | "large";
  placeholder?: string;
  label?: string;
}

function Input({
  value,
  onChange,
  placeholder,
  size,
  label,
  fontSize,
  fontColor,
}: InputProps) {
  let scale = 1;
  if (size === "small") scale = 2;
  if (size === "medium") scale = 3;
  if (size === "large") scale = 4;
  const style: React.CSSProperties = {
    width: `${scale * 5}rem`,
    paddingLeft: `10px`,
    fontSize: `${fontSize}`,
    color: `${fontColor}`,
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onChange(text);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        style={style}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
