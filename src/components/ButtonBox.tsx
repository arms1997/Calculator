import { FC } from "react";
import "./ButtonBox.css";
import { WithChildren } from "../common/utils/WithChildren";

export const ButtonBox: FC<WithChildren> = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};
