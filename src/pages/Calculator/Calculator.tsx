import { calculatorButtons } from "./CalculatorButtons";
import { Button } from "../../components/Button";
import { ButtonBox } from "../../components/ButtonBox";
import { HistoryWrapper } from "../../components/HistoryWrapper";
import { Screen } from "../../components/Screen";
import { Wrapper } from "../../components/Wrapper";
import { useCalculator } from "./useCalculator";
import "./Calculator.css";

export const Calculator = () => {
  const {
    calc,
    setCalc,
    showHistory,
    onShowHistoryClick,
    onEqualClickHandler,
  } = useCalculator();

  return (
    <div className="container">
      <Wrapper>
        <Screen value={calc.value !== "0" ? calc.value : calc.result} />
        <ButtonBox>
          {calculatorButtons.flat().map(({ value, onClickHandler }, i) => {
            return (
              <Button
                key={i}
                className={value === "=" ? "equals" : ""}
                value={value}
                onClick={
                  value === "His"
                    ? onShowHistoryClick
                    : value === "="
                    ? onEqualClickHandler
                    : onClickHandler(setCalc)
                }
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
      {showHistory && (
        <HistoryWrapper>
          {calc.completedHistory.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </HistoryWrapper>
      )}
    </div>
  );
};
