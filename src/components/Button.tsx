import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  className: string;
  value: string | number;
  onClick: React.MouseEventHandler;
}

export const Button: FC<ButtonProps> = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick} value={value}>
      {value}
    </button>
  );
};
