import { FC } from "react";
import { WithChildren } from "../common/utils/WithChildren";
import "./HistoryWrapper.css";

export const HistoryWrapper: FC<WithChildren> = ({ children }) => (
  <div className="history-wrapper">
    <h3 className="title">History</h3>
    {children}
  </div>
);
