import { SetStateAction } from "react";
import { determineNumber } from "../../common/utils/determineNumber";
import { CalcState, calcInitialState } from "./useCalculator";

export const numberClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    setCalc((prev) => ({ ...prev, value: determineNumber(prev.value, value) }));
  };

export const resetClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc(({ memory, completedHistory }) => ({
      ...calcInitialState,
      memory,
      completedHistory,
    }));
  };

export const operationClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const operation = e.currentTarget.value;

    setCalc((prev) => ({
      ...prev,
      result: prev.value,
      value: "0",
      sign: operation,
      history: [...prev.history, `${prev.value}`, `${operation}`],
    }));
  };

export const exponentClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      result: prev.value,
      sign: "**",
      value: "0",
      history: [...prev.history, `${prev.value}`, "**"],
    }));
  };

export const exponentPowerTwoClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      result: prev.value,
      sign: "**",
      value: "2",
      history: [...prev.history, `${prev.value}`, "**"],
    }));
  };

export const decimalClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      value: `${prev.value}.`,
    }));
  };

export const signClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      value: `${Number(prev.value) * -1}`,
    }));
  };

export const percentClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      value: `${Number(prev.value) * 0.01}`,
    }));
  };

export const squareRootClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      value: `${Math.sqrt(Number(prev.value))}`,
    }));
  };

export const memoryRecallClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({ ...prev, value: prev.memory }));
  };

export const memoryAddClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      memory: eval(`${prev.memory}+${prev.value}`).toString(),
    }));
  };

export const memorySubtractClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      memory: eval(`${prev.memory}-${prev.value}`).toString(),
    }));
  };

export const memoryResetClickHandler =
  (setCalc: React.Dispatch<SetStateAction<CalcState>>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCalc((prev) => ({
      ...prev,
      memory: "0",
    }));
  };
