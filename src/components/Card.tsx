import { FC } from "react";
import { WithChildren } from "../common/utils/WithChildren";
import "./Card.css";

export const Card: FC<WithChildren> = ({ children }) => (
  <div className="card">{children}</div>
);
