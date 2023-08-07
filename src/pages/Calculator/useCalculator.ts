import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import { createSession, getSessions } from "../../actions/sessionActions";
import { calculateNumber } from "../../common/utils/calculateNumber";

export interface CalcState {
  sign: string;
  value: string;
  result: string;
  history: string[];
  completedHistory: string[];
  memory: string;
}

export const calcInitialState: CalcState = {
  sign: "",
  value: "0",
  result: "0",
  history: [],
  completedHistory: [],
  memory: "0",
};

export const useCalculator = () => {
  const [calc, setCalc] = useState<CalcState>(calcInitialState);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();

  const onShowHistoryClick = () => setShowHistory((prev) => !prev);

  const onEqualClickHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const updatedHistory = [...calc.history, `${calc.value}`];
    const result = calculateNumber(updatedHistory);
    const session = `${updatedHistory.join("")}=${result}`;

    setCalc((prev) => ({
      ...prev,
      sign: "",
      result: "0",
      value: result,
      history: [],
      completedHistory: [...prev.completedHistory, session],
    }));

    await createSession(session);
  };

  useEffect(() => {
    const fetchSessions = async () => {
      const sessions = await getSessions();
      const history = sessions?.map((session) => session.calculation);

      if (history) {
        setCalc((prev) => ({ ...prev, completedHistory: history }));
      }
    };

    if (isLoggedIn) {
      fetchSessions();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setCalc(calcInitialState);
  }, [isLoggedIn]);

  return {
    calc,
    setCalc,
    showHistory,
    onShowHistoryClick,
    onEqualClickHandler,
  };
};
