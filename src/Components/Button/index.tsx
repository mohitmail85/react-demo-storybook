import React, { ReactNode, MouseEventHandler } from "react";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
  label,
  backgroundColor = "red",
  size = "medium",
  handleClick,
}: ButtonProps) {
  let scale = 1;
  if (size === "small") scale = 0.75;
  if (size === "medium") scale = 1.5;
  if (size === "large") scale = 3.5;
  const style: React.CSSProperties = {
    backgroundColor,
    padding: `${scale * 0.3}rem ${scale * 2}rem`,
    border: "none",
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

export default Button;
