import { MouseEventHandler } from "react";
import {
  resetClickHandler,
  signClickHandler,
  percentClickHandler,
  memoryAddClickHandler,
  memorySubtractClickHandler,
  memoryRecallClickHandler,
  memoryResetClickHandler,
  exponentPowerTwoClickHandler,
  exponentClickHandler,
  squareRootClickHandler,
  operationClickHandler,
  numberClickHandler,
  decimalClickHandler,
} from "./CalculatorClickHandlers";

export interface CalculatorButtonType {
  value: string | number;
  onClickHandler: (setStateAction: any) => MouseEventHandler<HTMLButtonElement>;
}

export const calculatorButtons: CalculatorButtonType[][] = [
  [
    { value: "C", onClickHandler: resetClickHandler },
    { value: "+-", onClickHandler: signClickHandler },
    { value: "%", onClickHandler: percentClickHandler },
    { value: "His", onClickHandler: () => () => {} },
  ],
  [
    { value: "M+", onClickHandler: memoryAddClickHandler },
    { value: "M-", onClickHandler: memorySubtractClickHandler },
    { value: "MR", onClickHandler: memoryRecallClickHandler },
    { value: "MC", onClickHandler: memoryResetClickHandler },
  ],
  [
    { value: "x\u00B2", onClickHandler: exponentPowerTwoClickHandler },
    { value: `x\u207F`, onClickHandler: exponentClickHandler },
    { value: "(√)", onClickHandler: squareRootClickHandler },
    { value: "/", onClickHandler: operationClickHandler },
  ],
  [
    { value: 7, onClickHandler: numberClickHandler },
    { value: 8, onClickHandler: numberClickHandler },
    { value: 9, onClickHandler: numberClickHandler },
    { value: "*", onClickHandler: operationClickHandler },
  ],
  [
    { value: 4, onClickHandler: numberClickHandler },
    { value: 5, onClickHandler: numberClickHandler },
    { value: 6, onClickHandler: numberClickHandler },
    { value: "-", onClickHandler: operationClickHandler },
  ],
  [
    { value: 1, onClickHandler: numberClickHandler },
    { value: 2, onClickHandler: numberClickHandler },
    { value: 3, onClickHandler: numberClickHandler },
    { value: "+", onClickHandler: operationClickHandler },
  ],
  [
    { value: 0, onClickHandler: numberClickHandler },
    { value: ".", onClickHandler: decimalClickHandler },
    { value: "=", onClickHandler: () => () => {} },
  ],
];
