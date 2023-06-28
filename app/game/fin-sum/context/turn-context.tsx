import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { TIME_OF_TURN } from "../constant";
import { useScoreContext } from "./score-context";

interface TurnContext {
  time: number;
  nextTurn: () => void;
  userAnswer: number[];
  setAnswer: (num: number) => void;
}

const { ContextProvider, useContext } = createDynamicContext<TurnContext>();

export const uesTurnContext = useContext;

interface TurnContextProvider {
  children: JSX.Element;
}

/**
 *
 */
const TurnProvider = ({ children }: TurnContextProvider) => {
  const { score, changeScore } = useScoreContext();
  const [timer, setTimer] = useState(TIME_OF_TURN);
  const [userAnswer, setUserAnswer] = useState<number[]>([]);

  // 타이머
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => {
        // TIME OVER
        if (prev === 0) {
          changeScore(-1);
          // alert("!");
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [changeScore]);

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
