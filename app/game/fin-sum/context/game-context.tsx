import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useState } from "react";
import { getAnswers, settingBoard } from "../algorithm";

interface GameContext {
  round: number;
  boards: any[]; // any check
  answers: any[]; // any check
  // isLoading: boolean;
}

const { ContextProvider, useContext } = createDynamicContext<GameContext>();

export const useGameContext = useContext;

interface GameContextProvider {
  children: JSX.Element;
}

/**
 *
 */
const GameProvider = ({ children }: GameContextProvider) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const nextRound = () => setCurrentRound((prev) => prev + 1);

  const boards = settingBoard();
  const answers = getAnswers(boards);

  return (
    <ContextProvider round={currentRound} boards={boards} answers={answers}>
      {children}
    </ContextProvider>
  );
};

export default GameProvider;
