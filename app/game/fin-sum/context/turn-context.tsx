import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { TIME_OF_RESULT, TIME_OF_TURN } from "../constant";
import { useScoreContext } from "./score-context";
import { useGameContext } from "./game-context";

interface TurnContext {
  time: number;
  nextTurn: () => void;
  userAnswer: number[];
  setAnswer: (num: number) => void;
}

const { ContextProvider, useContext } = createDynamicContext<TurnContext>();

export const useTurnContext = useContext;

interface TurnContextProvider {
  children: JSX.Element;
}

/**
 *
 * 제한시간 내 유저의 입력 관리하는 컨택스트
 *
 */
const TurnProvider = ({ children }: TurnContextProvider) => {
  const { score, changeScore } = useScoreContext();
  const { answers, toggleSubmitMode, checkAnswer, isGuide, guideModeToggle } =
    useGameContext();

  const [timer, setTimer] = useState(TIME_OF_TURN);
  const [userAnswer, setUserAnswer] = useState<number[]>([]);

  // 턴 타이머
  useEffect(() => {
    if (isGuide) {
      setTimer(() => TIME_OF_TURN);
    }

    const intervalId = setInterval(() => {
      setTimer((prev) => {
        // TIME OVER
        if (prev === 0) {
          changeScore(-1);
          setTimer(() => TIME_OF_RESULT / 1000 + TIME_OF_TURN);
          guideModeToggle("시간초과");
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [changeScore, isGuide]);

  const nextTurn = () => {
    setTimer(() => TIME_OF_TURN);
  };

  const setAnswer = (num: number) => {
    setUserAnswer((prev) => {
      if (prev.find((e) => e === num))
        return [...prev.filter((e) => num !== e)];
      return [...prev, num];
    });
  };

  useEffect(() => {
    if (userAnswer.length === 3 && !isGuide) {
      checkAnswer(userAnswer);
    }

    if (isGuide) {
      setUserAnswer([]);
    }
  }, [checkAnswer, userAnswer, isGuide]);

  return (
    <ContextProvider
      time={timer}
      nextTurn={nextTurn}
      userAnswer={userAnswer}
      setAnswer={setAnswer}
    >
      {children}
    </ContextProvider>
  );
};

export default TurnProvider;
