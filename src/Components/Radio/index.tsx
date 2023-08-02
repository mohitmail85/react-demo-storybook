import React, { ChangeEvent } from "react";

export interface Option {
  value: string;
  label: string;
}

export interface RadioProps {
  value?: string;
  options: Option[];
  selectedValue?: string;
  onChange: (value: string) => void;
  width?: string;
  fontSize?: string;
  color?: string;
}

function Radio({
  value,
  options,
  selectedValue,
  onChange,
  fontSize,
  width,
}: RadioProps) {
  const styleLabel: React.CSSProperties = {
    margin: `30px 30px`,
    fontSize: `${fontSize}`,
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value} style={styleLabel}>
          <input
            type="radio"
            value={option.value}
            checked={option.value === selectedValue}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default Radio;
