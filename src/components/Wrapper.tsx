import { FC, ReactNode } from "react";
import "./Wrapper.css";

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
