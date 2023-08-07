import { FC } from "react";
import "./Input.css";

export const Input: FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return <input className="input" {...props} />;
};
