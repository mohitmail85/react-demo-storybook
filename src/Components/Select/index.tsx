import React, { ChangeEvent } from "react";

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  value?: string;
  options: Option[];
  onChange: (value: string) => void;
  width?: string;
  fontSize?: string;
  color?: string;
}

function Select({
  value,
  options,
  onChange,
  width,
  fontSize,
  color,
}: SelectProps) {
  const style: React.CSSProperties = {
    padding: "8px",
    fontSize: `${fontSize}`,
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: `${width}`,
    outline: "none",
    color: `${color}`,
  };
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select value={value} onChange={handleChange} style={style}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
