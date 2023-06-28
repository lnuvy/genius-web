import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useState } from "react";
import { getAnswers, settingBoard } from "../algorithm";

interface ScoreContext {
  score: number;
  changeScore: (num: number) => void;
  // isLoading: boolean;
}

const { ContextProvider, useContext } = createDynamicContext<ScoreContext>();

export const useScoreContext = useContext;

interface ScoreContextProvider {
  children: JSX.Element;
}

/**
 *
 */
const ScoreProvider = ({ children }: ScoreContextProvider) => {
  const [score, setScore] = useState(0);

  const changeScore = (num: number) => {
    setScore((prev) => prev + num);
  };

  return (
    <ContextProvider score={score} changeScore={changeScore}>
      {children}
    </ContextProvider>
  );
};

export default ScoreProvider;
