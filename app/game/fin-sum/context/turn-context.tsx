import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useEffect, useState } from "react";
import { TIME_OF_TURN } from "../constant";
import { useScoreContext } from "./score-context";

interface TurnContext {
  time: number;
  nextTurn: () => void;
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

  return (
    <ContextProvider time={timer} nextTurn={nextTurn}>
      {children}
    </ContextProvider>
  );
};

export default TurnProvider;
