import { FC } from "react";
import "./Screen.css";

interface ScreenProps {
  value: string;
}

export const Screen: FC<ScreenProps> = ({ value }) => {
  return (
    <div className="screen" data-testid={"screen"}>
      {value}
    </div>
  );
};
